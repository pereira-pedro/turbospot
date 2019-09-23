import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

import { UsersService } from '../users.service';
import { User } from '../user.model';
import { AuthService } from 'src/app/auth/auth.service';
import { ConfirmationDialogComponent } from '../../utils/confirmation-dialog/confirmation-dialog.component';

import { MatDialog } from '@angular/material';

export interface UserTypes {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnDestroy {
  user: User;
  isLoading = false;
  form: FormGroup;

  userTypes: UserTypes[] = [
    { value: 'admin', viewValue: 'Administrador' },
    { value: 'teacher', viewValue: 'Professor' },
    { value: 'student', viewValue: 'Aluno' }
  ];

  private mode = 'create';
  private login: string;
  private authStatusSub: Subscription;

  constructor(
    public usersService: UsersService,
    public route: ActivatedRoute,
    private authService: AuthService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(authStatus => {
        this.isLoading = false;
      });

    this.form = this.formBuilder.group({
        fullname: ['', [Validators.required, Validators.minLength(3)]],
        login: ['', [Validators.required, Validators.minLength(3)]],
        type: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, {
        validator: MustMatch('password', 'confirmPassword', this.mode)
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('login')) {
        this.mode = 'edit';
        this.login = paramMap.get('login');
        this.isLoading = true;

        const passwordControl = this.form.get('password');
        passwordControl.clearValidators();

        const confirmationControl = this.form.get('confirmPassword');

        confirmationControl.clearValidators();
        this.usersService.getUserByLogin(this.login).subscribe(userData => {
          this.isLoading = false;

          this.user = {
            id: userData[0].id,
            fullname: userData[0].fullname,
            login: userData[0].login,
            type: userData[0].type,
            password: '',
            confirmation: ''
          };
          this.form.setValue({
            fullname: this.user.fullname,
            login: this.user.login,
            password: null,
            type: this.user.type,
            confirmPassword: null
          });
        });
      } else {
        this.mode = 'create';
        this.login = null;
      }
    });
  }

  onSaveUser() {
    if (this.form.invalid) {
      return;
    }

    this.isLoading = true;
    if (this.mode === 'create') {
      this.usersService.addUser(
        this.form.value.fullname,
        this.form.value.login,
        this.form.value.password,
        this.form.value.type
      );
    } else {
      this.usersService.updateUser(
        this.user.id,
        this.form.value.fullname,
        this.form.value.login,
        this.form.value.type,
        this.form.value.password === null ? '' : this.form.value.password
      );
    }
    this.form.reset();
  }

  onDelete() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Confirma a exclusão deste usuário?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.usersService.deleteUser(this.user.id);
      }
    });
  }

  checkPasswords(form: FormGroup) {
    // here we have the 'passwords' group
    const pass = form.controls.password.value;
    const confirmPass = form.controls.confirmPass.value;

    return pass === confirmPass ? null : { notSame: true };
  }
  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}


// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string, formMode: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value && formMode === 'create') {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  };
}
