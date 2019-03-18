import { Component, OnInit } from '@angular/core';
import { FormControlName, FormBuilder ,Validators, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder) {
    this.buildLoginForm();
  }

  ngOnInit() {
  }
 login:FormGroup;

  buildLoginForm(){
    this.login = this.fb.group({
      userName:['',Validators['required']],
      password:['',Validators['required']]
    })
  }
}
