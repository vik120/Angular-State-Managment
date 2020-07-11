import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
 

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {
	
	public searchControl: FormControl;
	userform: FormGroup
	submitted: Boolean = false;

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
