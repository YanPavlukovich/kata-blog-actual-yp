export type DataToRegister = {
  email: string;
  password: string;
  username: string;
};

export type UserData = {
  token: string | undefined;
  username: string;
  bio?: string;
  image?: string;
  email: string;
};

export type RegisterUser = (props: DataToRegister) => Promise<{
  type: 'OK' | 'IS_TAKEN';
  data: any;
}>;

export type UpdateUser = (
  data: { [key: string]: string | undefined },
  token: string
) => Promise<{
  type: 'OK' | 'IS_TAKEN';
  data: any;
}>;
