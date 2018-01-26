import { Component } from '@angular/core';
import { FlexService } from "../../lib/core/flex.service";
import { DeviceSize } from "../../lib/core/deviceSize";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    private deviceSize = DeviceSize;

    constructor(private service: FlexService) {
    }
}
