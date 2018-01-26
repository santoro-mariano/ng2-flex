import { Component, Input } from "@angular/core";
import { FlexService } from "../core/flex.service";
import { Orientation } from "../core/orientation";
import { FlxBaseComponent } from "../core/flxBase.component";
import { DeviceSize } from "../core/deviceSize";
import { HorizontalAlignment } from "../core/horizontalAlignment";
import { VerticalAlignment } from "../core/verticalAlignment";
import { ItemsSeparation } from "../core/itemsSeparation";
import { ItemsWrap } from "../core/itemsWrap";
import { ItemsWrapAlignment } from "../core/itemsWrapAlignment";

@Component({template: ""})
export class FlxGridElementComponent extends FlxBaseComponent {

    private _switchSize: string | DeviceSize;

    constructor(flexService: FlexService, private originalOrientation: Orientation) {
        super(flexService);
        this.orientation = originalOrientation;
        this.flexService.onDeviceSizeChanged.subscribe((deviceSize: DeviceSize) => {
            this.updateSwitchOrientation();
        });
    }

    @Input()
    set switchSize(value: string | DeviceSize) {
        this._switchSize = value;
        this.updateSwitchOrientation();
    }

    get switchSize():  string | DeviceSize {
        return this._switchSize;
    }

    private updateSwitchOrientation() {
        const switchElement = this.checkSwitchSize(this._switchSize, this.flexService.currentDeviceSize);
        if (switchElement) {
            if (this.orientation === this.originalOrientation) {
                this.switchOrientation();
            }
        } else {
            this.orientation = this.originalOrientation;
        }
    }

    private checkSwitchSize(switchSize: string | DeviceSize, deviceSize: DeviceSize): boolean {
        if (!switchSize || DeviceSize[switchSize] === undefined) {
            return false;
        }

        if (typeof switchSize === "string") {
            switchSize = DeviceSize[switchSize];
        }
        return deviceSize <= switchSize;
    }
}
