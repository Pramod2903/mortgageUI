import { Component, OnInit } from '@angular/core';
import { FormControlName, FormBuilder ,Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder) {
    this.buildRegisterForm();
   }

  ngOnInit() {
  }

  register:FormGroup;

  buildRegisterForm(){
    this.register = this.fb.group({
      userName:['',Validators['required']],
      password:['',Validators['required']],
      conPass:['',Validators['required']],
      email:['',Validators['required']],
      phone:['',Validators['required']],
    })
  }
}
