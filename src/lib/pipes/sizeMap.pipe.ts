import { Pipe, PipeTransform } from "@angular/core";
import { SizeMapping } from "../core/sizeMapping";
import { DeviceSizeHelper } from "../core/deviceSizeHelper";
import { DeviceSize } from "../core/deviceSize";

@Pipe({
    name: "sizeMap"
})
export class SizeMapPipe implements PipeTransform {
    transform(value: any): SizeMapping {
        const mapping = new SizeMapping();
        for (const prop in value) {
            if (value.hasOwnProperty(prop)) {
                const sizes = DeviceSizeHelper.getSizeOfString(prop);
                const propValue = value[prop];
                if (typeof(propValue) === "string") {
                    if ((sizes & DeviceSize.extraSmall) === DeviceSize.extraSmall) {
                        mapping.extraSmall = mapping.extraSmall ? `${mapping.extraSmall} ${propValue}` : propValue;
                    }
                    if ((sizes & DeviceSize.small) === DeviceSize.small) {
                        mapping.small = mapping.small ? `${mapping.small} ${propValue}` : propValue;
                    }
                    if ((sizes & DeviceSize.medium) === DeviceSize.medium) {
                        mapping.medium = mapping.medium ? `${mapping.medium} ${propValue}` : propValue;
                    }
                    if ((sizes & DeviceSize.large) === DeviceSize.large) {
                        mapping.large = mapping.large ? `${mapping.large} ${propValue}` : propValue;
                    }
                } else if (typeof(propValue) === "number") {
                    if ((sizes & DeviceSize.extraSmall) === DeviceSize.extraSmall) {
                        mapping.extraSmall = propValue;
                    }
                    if ((sizes & DeviceSize.small) === DeviceSize.small) {
                        mapping.small = propValue;
                    }
                    if ((sizes & DeviceSize.medium) === DeviceSize.medium) {
                        mapping.medium = propValue;
                    }
                    if ((sizes & DeviceSize.large) === DeviceSize.large) {
                        mapping.large = propValue;
                    }
                }
            }
        }
        return mapping;
    }
}
