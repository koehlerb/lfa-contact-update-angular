import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
// if you need forms support:
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';


import { AppComponent } from './app.component';
import { PickmemberComponent } from './pickmember/pickmember.component';
import { AppRoutingModule } from './app-routing.module';
import { UpdatememberComponent } from './updatemember/updatemember.component';
import { ConfirmupdateComponent } from './confirmupdate/confirmupdate.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    PickmemberComponent,
    UpdatememberComponent,
    ConfirmupdateComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RecaptchaModule.forRoot(), // Keep in mind the "forRoot"-magic nuances!
    RecaptchaFormsModule, AppRoutingModule // if you need forms support
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
