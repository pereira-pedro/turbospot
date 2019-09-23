import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConfirmationDialogComponent } from './utils/confirmation-dialog/confirmation-dialog.component';

import {
  MatButtonModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  declarations: [ConfirmationDialogComponent],
  exports: [
    ConfirmationDialogComponent,
  ],
  entryComponents: [ConfirmationDialogComponent]
})
export class AppUtilsModule {}
