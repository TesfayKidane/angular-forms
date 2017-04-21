/**
 * Created by Tesfay on 4/20/2017.
 */
import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {PostService} from '../service/post.service';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent {
  myForm: FormGroup;
  user = '';
  public submitted = false;
  constructor(private formBuilder: FormBuilder, public postService: PostService){
    this.myForm = formBuilder.group({
      'name' : ['', [Validators.required, Validators.minLength(1)]],
      'email' : ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
      'post' : ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.myForm);
  }
  getData() {
    this.postService.getPost('Sincere@april.biz')
      .subscribe( u => {console.log(u); },
                  err => {console.log(err); });
  }
}
