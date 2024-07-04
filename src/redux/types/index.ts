export interface UserState {
  uid: string | null;
  email: string | null;
  displayName: string | null;
}

export interface RootState {
  user: UserState;
}
