import { Component, Input } from "@angular/core";
import { FlexService } from "./flex.service";
import { FlxBaseComponent } from "./flxBase.component";
import { Orientation } from "./orientation";
import { VerticalAlignment } from "./verticalAlignment";
import { HorizontalAlignment } from "./horizontalAlignment";
import { ItemsSeparation } from "./itemsSeparation";
import { ItemsWrap } from "./itemsWrap";
import { ItemsWrapAlignment } from "./itemsWrapAlignment";
import { SizeMapping } from "./sizeMapping";

@Component({
    selector: "flx-panel, [flx-panel]",
    template: "<ng-content></ng-content>"
})
export class FlxPanelComponent extends FlxBaseComponent {

    constructor(flexService: FlexService) {
        super(flexService);
    }
}
