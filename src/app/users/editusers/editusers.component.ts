import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.css']
})
export class EditusersComponent implements OnInit {

	public searchControl: FormControl;
	userform: FormGroup
	submitted: Boolean = false;
	name: String = ''

  constructor( private fb: FormBuilder ) {
	  this.userform = this.fb.group({
		name: ['', Validators.required],
		  email: ['', [Validators.required, Validators.email]],
		  username: ['', Validators.required],
		  address: ['', Validators.required],
		  phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
		  company: ['', Validators.required],
		  website: ['', Validators.required],
	  })
  }

  ngOnInit(): void {
  }
  
  get f() {
	  return this.userform.controls;
  }
  
  onsubmit(event){
	//  console.log(event);
  	
	  this.submitted = true;
	  
	  if(this.userform.invalid){
	  	
	  }else{
	  	console.log(this.userform.value)
	  }
  }

}
