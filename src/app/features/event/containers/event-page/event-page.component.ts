import { Component } from '@angular/core';
import {OpenService} from "../../../../shared/services/open.service";

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent {

    constructor(private _openService: OpenService) {
    }


    getEvent(){
      this._openService.getEvent("0");
    }

}
