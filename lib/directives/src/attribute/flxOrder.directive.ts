import { Directive } from "@angular/core";

@Directive({
    selector: `[flxOrder],
               [flxOrder.xs],[flxOrder.sm],[flxOrder.md],[flxOrder.lg],
               [flxOrder.lt.md],[flxOrder.lt.lg],
               [flxOrder.gt.xs],[flxOrder.gt.sm]`
})
export class FlxOrderDirective {
}