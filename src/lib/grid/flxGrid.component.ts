import { Component, HostBinding, ElementRef, Renderer  } from "@angular/core";
import { FlxBaseComponent } from "../core/flxBase.component";
import { Orientation } from "../core/orientation";
import { FlexService } from "../core/flex.service";

@Component({
    selector: "flx-grid, [flx-grid]",
    template: "<ng-content></ng-content>",
})
export class FlxGridComponent extends FlxBaseComponent {
    constructor(flexService: FlexService) {
        super(flexService);
        this.orientation = Orientation.vertical;
    }
}
