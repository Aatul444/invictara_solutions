import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { BlogsComponent } from './pages/blogs/blogs.component';

export const routes: Routes = [
    {
        path:'', component:MainComponent
    },
    {
        path:'blogs', component:BlogsComponent
    }
];
