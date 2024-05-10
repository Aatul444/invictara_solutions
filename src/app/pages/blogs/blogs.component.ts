import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import moment from 'moment';
import { FirebaseFunctionsService } from '../../services/firebase-functions.service';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  blogPosts: any = [];
  constructor( private firebaseService: FirebaseFunctionsService ) {
    this.getBlogs()
  }
  getBlogs() {
    const docId = moment().format('MMMMYYYY');
    const blogsDate = moment().format('DD/MM/YYYY')

  }


}
