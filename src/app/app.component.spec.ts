import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'capstone-project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('capstone-project');
  });

  it(`Should have title like 'Product Inventory Management System'`, () => 
  {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    var brandName =  fixture.debugElement.query(By.css('.navbar-brand')).nativeElement.textContent;
    expect(brandName).toEqual('Product Inventory Management System');
  });

  it(`NavItem Should have name like 'About'`, () => 
  {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    var navItem = fixture.debugElement.query(By.css('#navItem_about')).nativeElement.textContent;
    expect(navItem).toEqual('About');
  });

  it(`NavItem Should have name like 'Product Summary'`, () => 
  {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    var navItem_summary = fixture.debugElement.query(By.css('#navItem_productSummary')).nativeElement.textContent;
    expect(navItem_summary).toEqual('Product Summary');
  })
});
