import { Component } from "@angular/core";
import { FlexService, DeviceSize } from "../../../lib/core/public_api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    private deviceSize = DeviceSize;

    constructor(private service: FlexService) {
    }
}
