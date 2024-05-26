import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/compat/app'; // Import specific modules
import 'firebase/compat/firestore'; // Import Firestore module if you need it
import moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afs: AngularFirestore) {}

  async getBlogs() {
    const docId = moment().format('MMMMYYYY');
    const blogsDate = moment().format('DD/MM/YYYY');

    return this.afs.collection('BLOGS').get().toPromise();
  }
}
