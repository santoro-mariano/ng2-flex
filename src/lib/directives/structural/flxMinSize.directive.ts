import { Directive, Input, ViewContainerRef, TemplateRef } from "@angular/core";
import { ConditionalSizeDirective } from "./conditionalSize.directive";
import { FlexService } from "../../core/flex.service";
import { DeviceSize } from "../../core/deviceSize";

@Directive({
    selector: "[flxMinSize]"
})
export class FlxMinSizeDirective extends ConditionalSizeDirective {

    private _minSize: string;

    constructor(viewContainerRef: ViewContainerRef, templateRef: TemplateRef<any>, flexService: FlexService) {
        super(viewContainerRef, templateRef, flexService);
    }

    @Input("flxMinSize")
    set minSize(value: string) {
        this._minSize = value;
        this.updateVisibility();
    }

    get minSize(): string {
        return this._minSize;
    }

    protected isSizeValid(size: DeviceSize): boolean {
        return size >= DeviceSize[this._minSize];
    }
}
