import { Directive, Input, ViewContainerRef, TemplateRef } from "@angular/core";
import { ConditionalSizeDirective } from "./conditionalSize.directive";
import { DeviceSize } from "../../core/deviceSize";
import { FlexService } from "../../core/flex.service";

@Directive({
    selector: "[flxMaxSize]"
})
export class FlxMaxSizeDirective extends ConditionalSizeDirective {

    private _maxSize: string;

    constructor(viewContainerRef: ViewContainerRef, templateRef: TemplateRef<any>, flexService: FlexService) {
        super(viewContainerRef, templateRef, flexService);
    }

    @Input("flxMaxSize")
    set maxSize(value: string) {
        this._maxSize = value;
        this.updateVisibility();
    }

    get maxSize(): string {
        return this._maxSize;
    }

    protected isSizeValid(size: DeviceSize): boolean {
        return size <= DeviceSize[this._maxSize];
    }
}
