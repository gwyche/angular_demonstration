import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { Newcomponent2Component } from './newcomponent2/newcomponent2.component';
import { DefaultComponent } from './default/default.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ProfileFBComponent } from './profile-fb/profile-fb.component';


const routes: Routes = [
  { path: 'c1', component: NewcomponentComponent },
  { path: 'c2', component: Newcomponent2Component },
  { path: 'home', component: DefaultComponent },
  { path: '', component: DefaultComponent },
  { path: 'on', component: OnboardingComponent },
  { path: 're', component: NameEditorComponent },
  { path: 'pe', component: ProfileEditorComponent},
  { path: 'fb', component: ProfileFBComponent}
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
