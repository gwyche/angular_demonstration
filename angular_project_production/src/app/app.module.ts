import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { AppRoutingModule } from './app-routing.module';
import { Newcomponent2Component } from './newcomponent2/newcomponent2.component';
import { DefaultComponent } from './default/default.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ProfileFBComponent } from './profile-fb/profile-fb.component';

@NgModule({
  declarations: [
    AppComponent,
    NewcomponentComponent,
    Newcomponent2Component,
    DefaultComponent,
    OnboardingComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    ProfileFBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
