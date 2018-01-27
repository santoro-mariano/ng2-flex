import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FlxBaseComponent } from "./core/src/flxBase.component";
import { FlxGridElementComponent } from "./grid/src/flxGridElement.component";

import { FlxPanelComponent } from "./core/src/flxPanel.component";
import { FlxContainerComponent } from "./core/src/flxContainer.component";
import { FlxGridComponent } from "./grid/src/flxGrid.component";
import { FlxColumnComponent } from "./grid/src/flxColumn.component";
import { FlxRowComponent } from "./grid/src/flxRow.component";
import { FlxMaxSizeDirective } from "./directives/src/structural/flxMaxSize.directive";
import { FlxMinSizeDirective } from "./directives/src/structural/flxMinSize.directive";
import { FlxSizeDirective } from "./directives/src/structural/flxSize.directive";
import { FlxClassDirective } from "./directives/src/attribute/flxClass.directive";
import { FlxOrderDirective } from "./directives/src/attribute/flxOrder.directive";
import { CheckSizePipe } from "./pipes/src/checkSize.pipe";
import { DeviceSizePipe } from "./pipes/src/deviceSize.pipe";
import { SizeMapPipe } from "./pipes/src/sizeMap.pipe";

import { FlexService } from "./core";

@NgModule({
    imports: [CommonModule],
    declarations: [FlxBaseComponent,
                   FlxGridElementComponent,
                   FlxPanelComponent,
                   FlxContainerComponent,
                   FlxGridComponent,
                   FlxColumnComponent,
                   FlxRowComponent,
                   FlxMaxSizeDirective,
                   FlxMinSizeDirective,
                   FlxSizeDirective,
                   FlxClassDirective,
                   FlxOrderDirective,
                   CheckSizePipe,
                   DeviceSizePipe,
                   SizeMapPipe],
    exports: [FlxPanelComponent,
              FlxContainerComponent,
              FlxGridComponent,
              FlxColumnComponent,
              FlxRowComponent,
              FlxMaxSizeDirective,
              FlxMinSizeDirective,
              FlxSizeDirective,
              FlxClassDirective,
              FlxOrderDirective,
              CheckSizePipe,
              DeviceSizePipe,
              SizeMapPipe]
})
export class FlexModule {
    public static forRoot(): ModuleWithProviders {
        return {ngModule: FlexModule, providers: [FlexService]};
    }
}
