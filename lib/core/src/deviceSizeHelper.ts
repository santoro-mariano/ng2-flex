import { DeviceSize } from "./deviceSize";

export class DeviceSizeHelper {
    static getSizeOfString(stringSize: string): DeviceSize {
        let deviceSize: DeviceSize;
        const sizes = stringSize.split("|");
        sizes.forEach(size => {
            const currentSize = DeviceSize[size.trim()];
            if (currentSize !== undefined) {
                deviceSize |= currentSize;
            }
        });
        return deviceSize;
    }
}
