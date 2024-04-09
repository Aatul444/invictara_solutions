import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeAreSecComponent } from './who-we-are-sec.component';

describe('WhoWeAreSecComponent', () => {
  let component: WhoWeAreSecComponent;
  let fixture: ComponentFixture<WhoWeAreSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoWeAreSecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhoWeAreSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
