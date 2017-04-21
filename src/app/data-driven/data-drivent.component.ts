import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
/**
 * Created by Tesfay on 4/20/2017.
 */
@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent {
  myForm: FormGroup;
  public submitted = false;
  constructor(private formBuilder: FormBuilder){
    this.myForm = formBuilder.group({
      'name' : ['', [Validators.required]],
      'email' : ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
      'post' : ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.myForm);
  }
}
