import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rootstack Test';
  name: any[];

  constructor(private dataService: DataService){}

  ngOnInit(){
    this.dataService.getNames()
      .subscribe(data => this.name = data);
  }
}
