import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import moment from 'moment';
import { FirebaseService } from '../../services/firebase-services/firebase.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  blogPosts: any = [];

  constructor(private afs: AngularFirestore) {
    this.afs.collection('BLOGS').get().subscribe(res=>{console.log(res)})
  }
 
  async getBlogs() {
    const docId = moment().format('MMMMYYYY');
    const blogsDate = moment().format('DD/MM/YYYY');
  }
}
