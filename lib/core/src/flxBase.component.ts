import { HostBinding, Component, Input, Optional } from "@angular/core";
import { FlexService } from "./flex.service";
import { Orientation } from "./orientation";
import { VerticalAlignment } from "./verticalAlignment";
import { HorizontalAlignment } from "./horizontalAlignment";
import { ItemsSeparation } from "./itemsSeparation";
import { ItemsWrap } from "./itemsWrap";
import { ItemsWrapAlignment } from "./itemsWrapAlignment";
import { SizeMapping } from "./sizeMapping";
import { DeviceSize } from "./deviceSize";

@Component({template: ""})
export class FlxBaseComponent {

    private _orientation: Orientation | string = Orientation.horizontal;
    private _verticalAlignment: VerticalAlignment | string = undefined;
    private _horizontalAlignment: HorizontalAlignment | string = undefined;
    private _itemsSeparation: ItemsSeparation | string = undefined;
    private _itemsWrap: ItemsWrap | string = undefined;
    private _itemsWrapAlignment: ItemsWrapAlignment | string = undefined;
    private _size: SizeMapping | string = "auto";
    private _order: SizeMapping | number = 0;

    constructor(protected readonly flexService: FlexService) {
        this.setFlexType();
    }

    // CSS Classes Bindings
    @HostBinding(`class.ng2flex-hidden`) private hidden = false;
    @HostBinding(`class.ng2flex-container`) private container = false;
    @HostBinding(`class.ng2flex-container-child`) private containerChild = false;
    @HostBinding(`class.ng2flex-horizontal-container`) private horizontalContainer = false;
    @HostBinding(`class.ng2flex-horizontal-container-reverse`) private horizontalContainerReverse = false;
    @HostBinding(`class.ng2flex-vertical-container`) private verticalContainer = false;
    @HostBinding(`class.ng2flex-vertical-container-reverse`) private verticalContainerReverse = false;
    @HostBinding(`class.ng2flex-itm-separation-all`) private itmSeparationAll = false;
    @HostBinding(`class.ng2flex-itm-separation-between`) private itmSeparationBetween = false;
    @HostBinding(`class.ng2flex-itm-nowrap`) private itmNowrap = false;
    @HostBinding(`class.ng2flex-itm-wrap`) private itmWrap = false;
    @HostBinding(`class.ng2flex-itm-wrap-reverse`) private itmWrapReverse = false;
    @HostBinding(`class.ng2flex-wrap-start`) private wrapStart = false;
    @HostBinding(`class.ng2flex-wrap-center`) private wrapCenter = false;
    @HostBinding(`class.ng2flex-wrap-end`) private wrapEnd = false;
    @HostBinding(`class.ng2flex-wrap-stretch`) private wrapStretch = false;
    @HostBinding(`class.ng2flex-wrap-all`) private wrapAll = false;
    @HostBinding(`class.ng2flex-wrap-between`) private wrapBetween = false;
    @HostBinding(`class.ng2flex-col-top`) private colTop = false;
    @HostBinding(`class.ng2flex-col-v-center`) private colVCenter = false;
    @HostBinding(`class.ng2flex-col-bottom`) private colBottom = false;
    @HostBinding(`class.ng2flex-col-left`) private colLeft = false;
    @HostBinding(`class.ng2flex-col-h-center`) private colHCenter = false;
    @HostBinding(`class.ng2flex-col-right`) private colRight = false;
    @HostBinding(`class.ng2flex-row-top`) private rowTop = false;
    @HostBinding(`class.ng2flex-row-v-center`) private rowVCenter = false;
    @HostBinding(`class.ng2flex-row-bottom`) private rowBottom = false;
    @HostBinding(`class.ng2flex-row-left`) private rowLeft = false;
    @HostBinding(`class.ng2flex-row-h-center`) private rowHCenter = false;
    @HostBinding(`class.ng2flex-row-right`) private rowRight = false;

    // Styles Bindings
    @HostBinding("style.-webkit-box-flex") private webKitBoxFlexStyle: any;
    @HostBinding("style.-moz-box-flex") private mozBoxFlexStyle: any;
    @HostBinding("style.-webkit-flex") private webkitFlexStyle: any;
    @HostBinding("style.-ms-flex") private msFlexStyle: any;
    @HostBinding("style.flex") private flexStyle: any;
    @HostBinding("style.-webkit-box-ordinal-group") private webkitBoxOrdinalGroupStyle: any;
    @HostBinding("style.-moz-box-ordinal-group") private mozBoxOrdinalGroupStyle: any;
    @HostBinding("style.-ms-flex-order") private msFlexOrderStyle: any;
    @HostBinding("style.-webkit-order") private webkitOrderStyle: any;
    @HostBinding("style.order") private orderStyle: any;

    // Enum providers
    public get orientations(): typeof Orientation { return Orientation; }
    public get verticalAlignments(): typeof VerticalAlignment { return VerticalAlignment; }
    public get horizontalAlignments(): typeof HorizontalAlignment { return HorizontalAlignment; }
    public get itemsSeparations(): typeof ItemsSeparation { return ItemsSeparation; }
    public get itemsWraps(): typeof ItemsWrap { return ItemsWrap; }
    public get itemsWrapAlignments(): typeof ItemsWrapAlignment { return ItemsWrapAlignment; }
    public get sizeMappings(): typeof SizeMapping { return SizeMapping; }

    protected setFlexType(container = true, containerChild = true): void {
        // TODO: This in constructor (with AOT) doesn't work
        this.container = container;
        this.containerChild = containerChild;
    }

    @Input()
    set orientation(value: Orientation | string) {
        this._orientation = value;
        this.updateOrientation(value);
        this.updateHorizontalAligment(this._horizontalAlignment);
        this.updateVerticalAlignment(this._verticalAlignment);
        this.updateItemsSeparation(this._itemsSeparation);
    }

    get orientation(): Orientation | string {
        return this._orientation;
    }

    @Input()
    set verticalAlignment(value: VerticalAlignment | string) {
        this._verticalAlignment = value;
        this.updateVerticalAlignment(value);
    }

    get VerticalAlignment(): VerticalAlignment | string {
        return this._verticalAlignment;
    }

    @Input()
    set horizontalAlignment(value: HorizontalAlignment | string) {
        this._horizontalAlignment = value;
        this.updateHorizontalAligment(value);
    }

    get horizontalAlignment(): HorizontalAlignment | string {
        return this._horizontalAlignment;
    }

    @Input()
    set itemsSeparation(value: ItemsSeparation | string) {
        this._itemsSeparation = value;
        this.updateItemsSeparation(this._itemsSeparation);
    }

    get itemsSeparation(): ItemsSeparation | string {
        return this._itemsSeparation;
    }

    @Input()
    set itemsWrap(value: ItemsWrap | string) {
        this._itemsWrap = value;
        this.updateItemsWrap(value);
    }

    get itemsWrap(): ItemsWrap | string {
        return this._itemsWrap;
    }

    @Input()
    set itemsWrapAlignment(value: ItemsWrapAlignment | string) {
        this._itemsWrapAlignment = value;
        this.updateItemsWrapAlignment(value);
    }

    get itemsWrapAlignment(): ItemsWrapAlignment | string {
        return this._itemsWrapAlignment;
    }

    @Input()
    set size(value: SizeMapping | string) {
        this._size = value;
        this.updateSize(value);
    }

    get size(): SizeMapping | string {
        return this._size;
    }

    @Input()
    set order(value: SizeMapping | number) {
        this._order = value;
        this.updateOrder(value);
    }

    get order(): SizeMapping | number {
        return this._order;
    }

    public switchOrientation(): void {
        switch (this.orientation) {
            case Orientation.horizontal:
                this.orientation = Orientation.vertical;
                break;
            case Orientation.horizontalReverse:
                this.orientation = Orientation.verticalReverse;
                break;
            case Orientation.vertical:
                this.orientation = Orientation.horizontal;
                break;
            case Orientation.verticalReverse:
                this.orientation = Orientation.horizontalReverse;
                break;
        }
    }

    private updateOrientation(value: Orientation | string) {
        if (typeof value === "string") {
            value = Orientation[value];
        }

        this.horizontalContainer = value === Orientation.horizontal;
        this.horizontalContainerReverse = value === Orientation.horizontalReverse;
        this.verticalContainer = value === Orientation.vertical;
        this.verticalContainerReverse = value === Orientation.verticalReverse;
    }

    private updateVerticalAlignment(value: VerticalAlignment | string) {
        if (typeof value === "string") {
            value = VerticalAlignment[value];
        }

        // Row
        this.rowTop = this._orientation === Orientation.horizontal && value === VerticalAlignment.top;
        this.rowVCenter = this._orientation === Orientation.horizontal && value === VerticalAlignment.center;
        this.rowBottom = this._orientation === Orientation.horizontal && value === VerticalAlignment.bottom;
        // Column
        this.colTop = this._orientation === Orientation.vertical && value === VerticalAlignment.top;
        this.colVCenter = this._orientation === Orientation.vertical && value === VerticalAlignment.center;
        this.colBottom = this._orientation === Orientation.vertical && value === VerticalAlignment.bottom;
    }

    private updateHorizontalAligment(value: HorizontalAlignment | string) {
        if (typeof value === "string") {
            value = HorizontalAlignment[value];
        }

        // Row
        this.rowLeft = this._orientation === Orientation.horizontal && value === HorizontalAlignment.left;
        this.rowHCenter = this._orientation === Orientation.horizontal && value === HorizontalAlignment.center;
        this.rowRight = this._orientation === Orientation.horizontal && value === HorizontalAlignment.right;
        // Column
        this.colLeft = this._orientation === Orientation.vertical && value === HorizontalAlignment.left;
        this.colHCenter = this._orientation === Orientation.vertical && value === HorizontalAlignment.center;
        this.colRight = this._orientation === Orientation.vertical && value === HorizontalAlignment.right;
    }

    private updateItemsSeparation(value: ItemsSeparation | string) {
        if (typeof value === "string") {
            value = ItemsSeparation[value];
        }

        this.itmSeparationAll = value === ItemsSeparation.all;
        this.itmSeparationBetween = value === ItemsSeparation.between;
    }

    private updateItemsWrap(value: ItemsWrap | string) {
        if (typeof value === "string") {
            value = ItemsWrap[value];
        }

        this.itmNowrap = value === ItemsWrap.noWrap;
        this.itmWrap = value === ItemsWrap.wrap;
        this.itmWrapReverse = value === ItemsWrap.wrapReverse;
    }

    private updateItemsWrapAlignment(value: ItemsWrapAlignment | string) {
        if (typeof value === "string") {
            value = ItemsWrapAlignment[value];
        }

        this.wrapStart = value === ItemsWrapAlignment.start;
        this.wrapCenter = value === ItemsWrapAlignment.center;
        this.wrapEnd = value === ItemsWrapAlignment.end;
        this.wrapStretch = value === ItemsWrapAlignment.stretch;
        this.wrapAll = value === ItemsWrapAlignment.all;
        this.wrapBetween = value === ItemsWrapAlignment.between;
    }

    private updateSize(value: SizeMapping | string) {
        this.clearSize();
        if (typeof(value) === "string") {
            switch (value.toUpperCase()) {
                case "NONE":
                    this.hidden = true;
                    break;
                default:
                    // TODO: Hacer enumerado RelativeSize (pensar el nombre): Fixed, AllowGrow, AllowShrink, AllowGrowShrink
                    this.setFlex(`0 0 ${value}`);
                    break;
            }
        } else {
          const mapping = value as SizeMapping;
          if (!mapping) {
              return;
          }
          const mappingValue = this.getValueOfSize(mapping, this.flexService.currentDeviceSize) as string;
          if (!mappingValue) {
              return;
          }
          this.setFlex(mappingValue);
        }
    }

    private updateOrder(value: SizeMapping | number) {
        this.clearOrder();
        if (typeof(value) === "number") {
            this.setFlexOrder(value as number);
        } else {
            const mapping = value as SizeMapping;
            if (!mapping) {
                return;
            }
            const mappingValue = this.getValueOfSize(mapping, this.flexService.currentDeviceSize) as number;
            if (!mappingValue) {
                return;
            }
            this.setFlexOrder(mappingValue);
        }
    }

    private clearSize(): void {
        this.hidden = false;
        this.setFlex(undefined);
    }

    private clearOrder(): void {
        this.setFlexOrder(undefined);
    }

    private setFlex(value: string) {
        this.webKitBoxFlexStyle =
        this.mozBoxFlexStyle =
        this.webkitFlexStyle =
        this.msFlexStyle =
        this.flexStyle = value;
    }

    private setFlexOrder(value: number) {
        this.webkitBoxOrdinalGroupStyle =
        this.mozBoxOrdinalGroupStyle =
        this.msFlexOrderStyle =
        this.webkitOrderStyle =
        this.orderStyle = value;
    }

    private getValueOfSize(mapping: SizeMapping, size: DeviceSize): string | number {
        // TODO: Agregar un mapping rule que determine que hacer con los tamaños (>=, <= ó ==)
        switch (size) {
            case DeviceSize.extraSmall:
                return mapping.extraSmall;
            case DeviceSize.small:
                return mapping.small;
            case DeviceSize.medium:
                return mapping.medium;
            case DeviceSize.large:
                return mapping.large;
        }
    }
}
