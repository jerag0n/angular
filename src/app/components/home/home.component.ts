import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public list = [];
  public loading = true;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    console.log('hello world');
    this.getUsers();
  }
  getUsers() {
    this.api.getApi()
    .subscribe(
      (res: any) => {
        this.list = res.results;
        debugger
      },
      (err: any) => console.log(err)
    );
  }



  tap() {
    this.loading = !this.loading;
  }
}
