import { Directive, Input, Renderer, ElementRef } from "@angular/core";
import { DeviceSize } from "../../core/deviceSize";
import { FlexService } from "../../core/flex.service";
import { DeviceSizeHelper } from "../../core/deviceSizeHelper";

@Directive({
    selector: `[flxClass],
               [flxClass.xs],[flxClass.sm],[flxClass.md],[flxClass.lg],
               [flxClass.lt.md],[flxClass.lt.lg],
               [flxClass.gt.xs],[flxClass.gt.sm]`
})
export class FlxClassDirective {

    private oldDeviceSize: DeviceSize;
    private _mapping: any;

    constructor(private flexService: FlexService, private renderer: Renderer, private elementRef: ElementRef) {
        flexService.onDeviceSizeChanged.subscribe((deviceSize: DeviceSize) => {
            this.updateClass(deviceSize);
        });
    }

    @Input("flxClass")
    set mapping(value: any) {
        this._mapping = value;
        this.updateClass(this.flexService.currentDeviceSize);
    }

    get mapping(): any {
        return this._mapping;
    }

    // Size mappings
    @Input("flxClass.xs") classXs: string;
    @Input("flxClass.sm") classSm: string;
    @Input("flxClass.md") classMd: string;
    @Input("flxClass.lg") classLg: string;
    @Input("flxClass.lt.md") classLtMd: string;
    @Input("flxClass.lt.lg") classLtLg: string;
    @Input("flxClass.gt.xs") classGtXs: string;
    @Input("flxClass.gt.sm") classGtSm: string;

    private updateClass(deviceSize: DeviceSize): void {
        if (this.oldDeviceSize !== undefined) {
            const cssClassOfSize = this.getClassesOfSize(this.oldDeviceSize);
            if (cssClassOfSize !== undefined && cssClassOfSize.length > 0) {
                this.setElementClasses(cssClassOfSize, false);
            }
        }
        const classOfSize = this.getClassesOfSize(deviceSize);
        if (classOfSize !== undefined && classOfSize.length > 0) {
            this.setElementClasses(classOfSize, true);
            this.oldDeviceSize = deviceSize;
        }
    }

    private getClassesOfSize(deviceSize: DeviceSize): Array<string> {
        if (!this.mapping) {
            return undefined;
        }
        const classes = new Array<string>();
        for (const prop in this.mapping) {
            if (this.mapping.hasOwnProperty(prop)) {
                const sizes = DeviceSizeHelper.getSizeOfString(this.mapping[prop]);
                if (sizes && (sizes & deviceSize) === deviceSize) {
                    classes.push(prop);
                }
            }
        }

        if (this.classXs && deviceSize === DeviceSize.extraSmall) { classes.push(...this.getClassesFromString(this.classXs)); }
        if (this.classSm && deviceSize === DeviceSize.small) { classes.push(...this.getClassesFromString(this.classSm)); }
        if (this.classMd && deviceSize === DeviceSize.medium) { classes.push(...this.getClassesFromString(this.classMd)); }
        if (this.classLg && deviceSize === DeviceSize.large) { classes.push(...this.getClassesFromString(this.classLg)); }

        if (this.classLtMd && (deviceSize === DeviceSize.extraSmall ||
                               deviceSize === DeviceSize.small)) {
            classes.push(...this.getClassesFromString(this.classLtMd));
        }
        if (this.classLtLg && (deviceSize === DeviceSize.extraSmall ||
                               deviceSize === DeviceSize.small ||
                               deviceSize === DeviceSize.medium)) {
            classes.push(...this.getClassesFromString(this.classLtLg));
        }
        if (this.classGtXs && (deviceSize === DeviceSize.small ||
                               deviceSize === DeviceSize.medium ||
                               deviceSize === DeviceSize.large)) {
            classes.push(...this.getClassesFromString(this.classGtXs));
        }
        if (this.classGtSm && (deviceSize === DeviceSize.medium ||
                               deviceSize === DeviceSize.large)) {
            classes.push(...this.getClassesFromString(this.classGtSm));
        }

        return classes;
    }

    private getClassesFromString(classes: string): Array<string> {
        return classes.trim().split(" ");
    }

    private setElementClasses(classes: Array<string>, isAdd: boolean) {
        classes.forEach(className => {
            if (className) {
                this.renderer.setElementClass(this.elementRef.nativeElement, className.trim(), isAdd);
            }
        });
    }
}
