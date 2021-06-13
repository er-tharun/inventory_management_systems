import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsService } from '../products.service';

import { ProductChartsComponent } from './product-charts.component';

describe('ProductChartsComponent', () => {
  let component: ProductChartsComponent;
  let fixture: ComponentFixture<ProductChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductChartsComponent ],
      providers: [ProductsService],
      imports: [SharedModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
