import { Component, Input } from "@angular/core";

import { FlxGridElementComponent } from "./flxGridElement.component";
import { FlexService, Orientation } from "../../core";


@Component({
    selector: "flx-row, [flx-row]",
    template: "<ng-content></ng-content>"
})
export class FlxRowComponent extends FlxGridElementComponent {

    constructor(flexService: FlexService) {
        super(flexService);
        this.initialize(Orientation.horizontal);
    }
}
