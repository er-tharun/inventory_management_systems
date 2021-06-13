import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsService } from '../products.service';

import { AddproductFormComponent } from './addproduct-form.component';

describe('AddproductFormComponent', () => {
  let component: AddproductFormComponent;
  let fixture: ComponentFixture<AddproductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproductFormComponent ],
      providers: [ProductsService],
      imports: [SharedModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
