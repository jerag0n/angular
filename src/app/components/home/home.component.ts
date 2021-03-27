import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public list = null;
  public loading = true;
  public myform:any;
  public name:any;
  constructor(private api: ApiService, private fb: FormBuilder) {
  
    
  }

  ngOnInit(): void {
    console.log('hello world');
    this.getUsers();
    this.name=new FormControl("");
  }
  getUsers() {
    this.api.getApi()
    .subscribe(
      (res: any) => {
        this.list = res.results;
    
      },
      (err: any) => console.log(err)
    );
  }



  tap() {
    this.loading = !this.loading;
    console.log(this.name.value)
  }
}
