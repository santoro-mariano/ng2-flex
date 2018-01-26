import { Component, Input } from "@angular/core";
import { FlxGridElementComponent } from "./flxGridElement.component";
import { Orientation } from "../core/orientation";
import { SizeMapping } from "../core/sizeMapping";
import { FlexService } from "../core/flex.service";


@Component({
    selector: "flx-row, [flx-row]",
    template: "<ng-content></ng-content>"
})
export class FlxRowComponent extends FlxGridElementComponent {

    constructor(flexService: FlexService) {
        super(flexService, Orientation.horizontal);
    }
}
