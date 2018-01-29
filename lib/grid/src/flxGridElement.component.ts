import { Component, Input } from "@angular/core";

import { FlxBaseComponent } from "../../core/src/flxBase.component";
import { FlexService, DeviceSize, Orientation } from "../../core";

@Component({template: ""})
export class FlxGridElementComponent extends FlxBaseComponent {

    private _switchSize: string | DeviceSize;
    private originalOrientation: Orientation;

    constructor(flexService: FlexService) {
        super(flexService);
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

    protected initialize(originalOrientation: Orientation): void {
        this.orientation = this.originalOrientation = originalOrientation;
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
