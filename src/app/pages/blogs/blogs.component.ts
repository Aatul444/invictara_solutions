import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  blogPosts = [
    {
      title: 'First Post',
      content: 'This is the content of the first post.',
      publishedDate: '2024-03-30'
    },
    {
      title: 'Second Post',
      content: 'This is the content of the second post.',
      publishedDate: '2024-04-01'
    },
    // Add more blog posts as needed
  ];
}
