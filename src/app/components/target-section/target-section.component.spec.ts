import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetSectionComponent } from './target-section.component';

describe('TargetSectionComponent', () => {
  let component: TargetSectionComponent;
  let fixture: ComponentFixture<TargetSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TargetSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
