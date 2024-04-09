import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosectionComponent } from './dosection.component';

describe('DosectionComponent', () => {
  let component: DosectionComponent;
  let fixture: ComponentFixture<DosectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DosectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DosectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
