export interface LoginType {
  id?: string;
  email: string;
  password: string;
}

export interface LoginErrorType extends LoginType {
  message: string;
}

export interface RegisterType {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface RegisterErrorType extends RegisterType {
  message: string;
}

export interface UserType {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}
