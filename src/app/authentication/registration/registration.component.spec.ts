import { fn } from '@angular/compiler/src/output/output_ast';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthService } from '../auth.service';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      providers: [AuthService],
      imports: [SharedModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Input filed name shoud be 'Email address'`, () =>
  {
    const fixture = TestBed.createComponent(RegistrationComponent)
    const app = fixture.componentInstance;
    fixture.detectChanges();
    var email = fixture.debugElement.query(By.css('#inputEmailJ')).nativeElement.textContent;
    expect(email).toEqual('Email address');
  })

  it(`Input filed name shoud be 'Password'`, () =>
  {
    const fixture = TestBed.createComponent(RegistrationComponent)
    const app = fixture.componentInstance;
    fixture.detectChanges();
    var password = fixture.debugElement.query(By.css('#inputPasswordJ')).nativeElement.textContent;
    expect(password).toEqual('Password');
  })
  it(`Input filed name shoud be 'First Name'`, () =>
  {
    const fixture = TestBed.createComponent(RegistrationComponent)
    const app = fixture.componentInstance;
    fixture.detectChanges();
    var fname = fixture.debugElement.query(By.css('#inputFirstNameJ')).nativeElement.textContent;
    expect(fname).toEqual('First Name');
  })
  it(`Input filed name shoud be 'Last Name'`, () =>
  {
    const fixture = TestBed.createComponent(RegistrationComponent)
    const app = fixture.componentInstance;
    fixture.detectChanges();
    var lName = fixture.debugElement.query(By.css('#inputLastNameJ')).nativeElement.textContent;
    expect(lName).toEqual('Last Name');
  })
  it(`Input filed name shoud be 'Location'`, () =>
  {
    const fixture = TestBed.createComponent(RegistrationComponent)
    const app = fixture.componentInstance;
    fixture.detectChanges();
    var location = fixture.debugElement.query(By.css('#inputLocationJ')).nativeElement.textContent;
    expect(location).toEqual('Location');
  })
  it(`Input filed name shoud be 'Mobile Number'`, () =>
  {
    const fixture = TestBed.createComponent(RegistrationComponent)
    const app = fixture.componentInstance;
    fixture.detectChanges();
    var mobile = fixture.debugElement.query(By.css('#inputMobileNumberJ')).nativeElement.textContent;
    expect(mobile).toEqual('Mobile Number');
  })

  
});
