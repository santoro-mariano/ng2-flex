import { Pipe, PipeTransform } from "@angular/core";
import { DeviceSizeHelper } from "../core/deviceSizeHelper";
import { DeviceSize } from "../core/deviceSize";

@Pipe({
    name: "deviceSize"
})
export class DeviceSizePipe implements PipeTransform {

    transform(value: string): DeviceSize {
        return DeviceSizeHelper.getSizeOfString(value);
    }
}
