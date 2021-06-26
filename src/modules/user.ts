import firebase from '../data/firebase';

export interface IUser {
  user: firebase.User | null;
  profile: IUserProfile | null;
}

export interface IUserProfile {
  userId: string;
  fullName: string;
  userName: string;
  password: string;
  uid: string;
}
