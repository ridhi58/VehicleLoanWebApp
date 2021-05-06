import { MainpagethirdcardComponent } from './mainpagethirdcard/mainpagethirdcard.component';
import { MainpagesecondcardComponent } from './mainpagesecondcard/mainpagesecondcard.component';
import { MainpagefirstcardComponent } from './mainpagefirstcard/mainpagefirstcard.component';
import { PrivacyStatementComponent } from './privacy-statement/privacy-statement.component';
import { FAQsComponent } from './faqs/faqs.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { EMIcalculateComponent } from './emicalculate/emicalculate.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component'

const routes: Routes = [
  {path:'',component:MainPageComponent},
  {path:'app-login', component:LoginComponent},
  {path:'user-login', component:UserLoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'admin-login' ,component:AdminLoginComponent},
  {path:'eligibility', component:EligibilityComponent},
  {path:'apply-loan',component:ApplyLoanComponent},
  {path:'emi-calculator', component:EMIcalculateComponent},
  {path:'userDashboard', component:UserDashboardComponent},
  {path:'adminDashboard', component:AdminDashboardComponent},
  {path:'document' , component:DocumentationComponent},
  {path:'forgot' , component:ForgotPasswordComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'user-dashboard', component: UserDashboardComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'disclaimer', component: DisclaimerComponent},
  {path: 'FAQs', component: FAQsComponent},
  {path: 'privacy-statement', component: PrivacyStatementComponent},
  {path: 'first-card', component: MainpagefirstcardComponent},
  {path: 'second-card', component: MainpagesecondcardComponent},
  {path: 'third-card', component: MainpagethirdcardComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
