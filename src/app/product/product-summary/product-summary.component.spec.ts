import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from 'src/app/shared/shared.module';
import { productsFilter } from '../products-filter.pipe';
import { ProductsService } from '../products.service';

import { ProductSummaryComponent } from './product-summary.component';

describe('ProductSummaryComponent', () => {
  let component: ProductSummaryComponent;
  let fixture: ComponentFixture<ProductSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSummaryComponent, productsFilter ],
      providers: [ProductsService],
      imports: [SharedModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Button name shoud be 'Add Product'`, () =>
{
  const fixture = TestBed.createComponent(ProductSummaryComponent)
  const app = fixture.componentInstance;
  fixture.detectChanges();
  var addButton = fixture.debugElement.query(By.css('#addButton')).nativeElement.textContent;
  expect(addButton).toEqual('Add Product');
})
it(`Button name shoud be 'Edit Product'`, () =>
{
  const fixture = TestBed.createComponent(ProductSummaryComponent)
  const app = fixture.componentInstance;
  fixture.detectChanges();
  var editButton = fixture.debugElement.query(By.css('#editButton')).nativeElement.textContent;
  expect(editButton).toEqual('Edit Product');
})
it(`Button name shoud be 'delete Product'`, () =>
{
  const fixture = TestBed.createComponent(ProductSummaryComponent)
  const app = fixture.componentInstance;
  fixture.detectChanges();
  var deleteButton = fixture.debugElement.query(By.css('#deleteButton')).nativeElement.textContent;
  expect(deleteButton).toEqual('Delete Product');
})
it(`Button name shoud be 'Click to View Most Visited Products'`, () =>
{
  const fixture = TestBed.createComponent(ProductSummaryComponent)
  const app = fixture.componentInstance;
  fixture.detectChanges();
  var mostViewed = fixture.debugElement.query(By.css('#mostViewed')).nativeElement.textContent;
  expect(mostViewed).toEqual('Click to View Most Visited Products');
})
it(`Button name shoud be 'Add Product'`, () =>
{
  const fixture = TestBed.createComponent(ProductSummaryComponent)
  const app = fixture.componentInstance;
  fixture.detectChanges();
  var searchTitle = fixture.debugElement.query(By.css('#search_title')).nativeElement.textContent;
  expect(searchTitle).toEqual('Enter the Product Name to Search');
})

});

