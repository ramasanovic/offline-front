import {Component} from '@angular/core';
import {AppService} from "./app.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {
  title = 'offline-front';
  cities: City[] = [];
  selectedCity: string = '';
  username: string = 'off_user';
  password: string = 'off_pass';

  constructor(private appService: AppService, private messageService: MessageService) {
    this.getAirports();
  }

  getAirports() {
    this.appService.getAirports().subscribe((data) => {
      this.messageService.add({severity:'success', summary:'Success', detail:'Airport Service'});
      this.cities = data;
    })
  }

  login(){
    let req: User = {username: this.username, password:this.password}
    this.appService.login(req).subscribe((data) => {
      this.messageService.add({severity:'success', summary:'Success', detail:'Login Service'});
    })

  }

}

interface City {
  name: string,
  code: string
}

interface User {
  username: string,
  password: string
}
