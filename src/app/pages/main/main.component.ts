import { Component } from '@angular/core';
import { DosectionComponent } from '../../components/dosection/dosection.component';
import { WhoWeAreSecComponent } from '../../components/who-we-are-sec/who-we-are-sec.component';
import { WorkSectionComponent } from '../../components/work-section/work-section.component';
import { ClientSectionComponent } from '../../components/client-section/client-section.component';
import { TargetSectionComponent } from '../../components/target-section/target-section.component';
import { ContactSectionComponent } from '../../components/contact-section/contact-section.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [DosectionComponent,WhoWeAreSecComponent,WorkSectionComponent,ClientSectionComponent,TargetSectionComponent,ContactSectionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
