import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterComponent } from './register/register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { EMIcalculateComponent } from './emicalculate/emicalculate.component';
import { HttpClientModule } from '@angular/common/http';
import {UserService} from './user.service';
import {UserApplyService} from './user-apply.service'
import {UserValidationService} from './user-validation.service'
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DocumentationComponent } from './documentation/documentation.component'
import { LoanApplicationService } from './loan-application.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotService } from './forgot.service';
import { CustomPipe } from './custom.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    LoginComponent,
    UserLoginComponent,
    RegisterComponent,
    AdminLoginComponent,
    EligibilityComponent,
    ApplyLoanComponent,
    EMIcalculateComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    DocumentationComponent,
    ForgotPasswordComponent,
    CustomPipe,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, FormsModule,HttpClientModule

  ],
  providers:  [UserService,UserApplyService , LoanApplicationService ,UserValidationService, ForgotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
