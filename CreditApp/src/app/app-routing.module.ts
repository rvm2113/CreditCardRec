import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { RecComponent } from './rec/rec.component';
import { AppComponent } from './app.component';
import {SurveyComponent} from './survey/survey.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
  	 { path: '', redirectTo: '/splash', pathMatch: 'full'},
  	 {path: 'splash', component: SplashScreenComponent},
      {path:'survey', component:SurveyComponent},
       
      {path: 'rec', component: RecComponent},
     

    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
