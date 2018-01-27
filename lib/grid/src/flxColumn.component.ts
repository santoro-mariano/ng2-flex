import { Component, Input } from "@angular/core";
import { FlxGridElementComponent } from "./flxGridElement.component";
import { FlexService, Orientation } from "../../core";


@Component({
    selector: "flx-column, [flx-column]",
    template: "<ng-content></ng-content>"
})
export class FlxColumnComponent extends FlxGridElementComponent {
    constructor(flexService: FlexService) {
        super(flexService);
        this.initialize(Orientation.vertical);
    }
}
