import { Component, Input } from "@angular/core";
import { FlxGridElementComponent } from "./flxGridElement.component";
import { Orientation } from "../core/orientation";
import { FlexService } from "../core/flex.service";
import { SizeMapping } from "../core/sizeMapping";


@Component({
    selector: "flx-column, [flx-column]",
    template: "<ng-content></ng-content>"
})
export class FlxColumnComponent extends FlxGridElementComponent {
    constructor(flexService: FlexService) {
        super(flexService, Orientation.vertical);
    }
}
