import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  burgerToggle=false;
  constructor(private router:Router){

  }
  onBurger(){
    this.burgerToggle=!this.burgerToggle
  }
  handleRoute(route:string){
    this.burgerToggle = false;
    this.router.navigate([route]);
  }

}
