import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthService } from '../auth.service';

import { RegistrationdetailsComponent } from './registrationdetails.component';

describe('RegistrationdetailsComponent', () => {
  let component: RegistrationdetailsComponent;
  let fixture: ComponentFixture<RegistrationdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationdetailsComponent ],
      providers: [AuthService],
      imports: [SharedModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
