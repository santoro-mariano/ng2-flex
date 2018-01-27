import { Pipe, PipeTransform } from "@angular/core";

import { DeviceSize } from "../../core";
import { DeviceSizeHelper } from "../../core/src/deviceSizeHelper";


@Pipe({
    name: "checkSize"
})
export class CheckSizePipe implements PipeTransform {

    transform(value: DeviceSize, allowedSizes: string): boolean {
        const allowed = DeviceSizeHelper.getSizeOfString(allowedSizes);
        return !!(value & allowed);
    }
}
