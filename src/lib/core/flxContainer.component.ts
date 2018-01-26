import { Component, Input, ViewEncapsulation, HostBinding } from "@angular/core";
import { FlxBaseComponent } from "./flxBase.component";
import { FlexService } from "./flex.service";

@Component({
    selector: "flx-container, [flx-container]",
    template: "<ng-content></ng-content>",
    encapsulation: ViewEncapsulation.None,
    styleUrls: ["./flxContainer.component.scss"]
})
export class FlxContainerComponent extends FlxBaseComponent {

    constructor(flexService: FlexService) {
        super(flexService, true, false);
    }

    @Input()
    @HostBinding("class.ng2flex-full-viewport")
    fullViewport = true;
}
