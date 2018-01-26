import { Directive, Input, ViewContainerRef, TemplateRef } from "@angular/core";
import { ConditionalSizeDirective } from "./conditionalSize.directive";
import { FlexService } from "../../core/flex.service";
import { DeviceSize } from "../../core/deviceSize";

@Directive({
    selector: "[flxSize]"
})
export class FlxSizeDirective extends ConditionalSizeDirective {

    private _size: string;

    constructor(viewContainerRef: ViewContainerRef, templateRef: TemplateRef<any>, flexService: FlexService) {
        super(viewContainerRef, templateRef, flexService);
    }

    @Input("flxSize")
    set size(value: string) {
        this._size = value;
        this.updateVisibility();
    }

    get size(): string {
        return this._size;
    }

    protected isSizeValid(size: DeviceSize): boolean {
        return size === DeviceSize[this.size];
    }
}
