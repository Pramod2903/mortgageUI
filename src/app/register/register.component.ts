import { Component, OnInit } from '@angular/core';
import { FormControlName, FormBuilder ,Validators, FormGroup} from '@angular/forms';
import { MortgageService } from '../mortgage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder, private ser:MortgageService, private router:Router) {
    this.buildRegisterForm();
   }

  ngOnInit() {
  }

  register:FormGroup;

  buildRegisterForm(){
    this.register = this.fb.group({
      name:['',Validators.required],
      password:['',Validators.required],
      conPass:['',Validators.required],
      email:['',Validators.required],
      mobile:['',Validators.required],
    })
  }

  userMeassage:any;

  userRegister(obj){
    this.ser.userRegistrationSer(obj).subscribe(data => {
      this.userMeassage = data
      if(data.email === obj.email){
        alert(`sucessufuly registerd`);
        this.router.navigate(['/login']);
      }else{
        alert(`Error in while register`);
      }
    })
   }

  onSubmit(){
   console.log(this.register.value);
    let obj ={
      "userName" : this.register.controls['name'].value,
      "password" :this.register.controls['password'].value,
      "phone": this.register.controls['mobile'].value,
      "email":this.register.controls['email'].value,
      }

      this.userRegister(obj);
  }
}
