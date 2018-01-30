import { Component, HostBinding, ElementRef, Renderer  } from "@angular/core";

import { FlexService, Orientation, FlxBaseComponent } from "../../core";


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
