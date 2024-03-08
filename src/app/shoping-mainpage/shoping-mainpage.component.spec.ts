import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingMainpageComponent } from './shoping-mainpage.component';

describe('ShopingMainpageComponent', () => {
  let component: ShopingMainpageComponent;
  let fixture: ComponentFixture<ShopingMainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopingMainpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopingMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
