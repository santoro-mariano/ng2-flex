import { Component } from "@angular/core";
import { FlexService, DeviceSize } from "../../../lib/core/public_api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

   deviceSize = DeviceSize;

    constructor(public service: FlexService) {
    }
}
