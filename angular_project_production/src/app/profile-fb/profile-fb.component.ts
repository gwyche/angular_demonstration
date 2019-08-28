import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-fb',
  templateUrl: './profile-fb.component.html',
  styleUrls: ['./profile-fb.component.css']
})

export class ProfileFBComponent {
  profileForm = this.fb.group({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    state: '',
    zip: ''
  });

  arbitraryNames(){
    this.profileForm.controls['firstName'].setValue('Default fName');
    this.profileForm.controls['lastName'].setValue('Default lName');
    this.profileForm.controls['street'].setValue('Default Street');
    this.profileForm.controls['city'].setValue('Default City');
    this.profileForm.controls['state'].setValue('Default State');
    this.profileForm.controls['zip'].setValue('Default Zip');
  }

  constructor(private fb: FormBuilder) { }
}