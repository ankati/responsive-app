import { Component } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'responsive-app';
  userForm: FormGroup;
  user= {
    firstName: 'New',
    lastName: 'User',
    role: 'Guest',
    notes: undefined
  };
  roles: Array<string> = [
    'Guest',
    'Admin',
    'Owner',
    'Operator'
  ];
  constructor(private formBuilder: FormBuilder){
    this.userForm = this.formBuilder.group({
      'firstName': [],
      'lastName': [],
      'middleName': [],
      'suffix': [],
      'dob': [],
      'ssn': [],
      'emailAdress': [],
      'primaryPhoneNumber': [],
      'alternativePhoneNumber': [],
      'applicationId': [],
      'personIdTupe':[],
      'address': formBuilder.group({
        'adress2': [''],
        'adress1': [''],
        'zipcode': [''],
        'city': [''],
        'state': [''],
        'country': [''],
        'livedatthisadress': [''],
        'houseStatus': [''],
        'monthlypayingamount':['']
    })
    });
  }
  ngOnint(){
  // call get service then set what evr you get from backend service
  this.userForm.setValue();
  }

  logFormValue(){
    let some='';
    console.log();
  }
}
