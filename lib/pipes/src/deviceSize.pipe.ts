import { Pipe, PipeTransform } from "@angular/core";

import { DeviceSize } from "../../core";
import { DeviceSizeHelper } from "../../core/src/deviceSizeHelper";


@Pipe({
    name: "deviceSize"
})
export class DeviceSizePipe implements PipeTransform {

    transform(value: string): DeviceSize {
        return DeviceSizeHelper.getSizeOfString(value);
    }
}
