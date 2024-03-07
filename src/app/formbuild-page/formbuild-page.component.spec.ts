import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuildPageComponent } from './formbuild-page.component';

describe('FormbuildPageComponent', () => {
  let component: FormbuildPageComponent;
  let fixture: ComponentFixture<FormbuildPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormbuildPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormbuildPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
