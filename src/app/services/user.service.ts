import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, authState, user } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) {

    authState(this.auth).subscribe(res => {
      console.log(res);
    })

    user(this.auth).subscribe(res => {
      console.log(res?.email);
    })
  }

  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }

  async getUid() {
    const currentUser:any = await this.auth.currentUser;
    if (currentUser === null) {
      return null;
    } else {
      return currentUser.identifier;
    }
  }

  async getEmail() {
    return await this.auth
  }
}
