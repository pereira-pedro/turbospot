export interface Response<T> {
  status: string;
  message: string;
  data: Array<T>;
}
