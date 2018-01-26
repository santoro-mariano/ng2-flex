import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlxPanelComponent } from "./core/flxPanel.component";
import { FlxContainerComponent } from "./core/flxContainer.component";
import { FlxGridComponent } from "./grid/flxGrid.component";
import { FlxRowComponent } from "./grid/flxRow.component";
import { FlxColumnComponent } from "./grid/flxColumn.component";
import { FlxMaxSizeDirective } from "./directives/structural/flxMaxSize.directive";
import { FlxMinSizeDirective } from "./directives/structural/flxMinSize.directive";
import { FlxSizeDirective } from "./directives/structural/flxSize.directive";
import { FlxClassDirective } from "./directives/attribute/flxClass.directive";
import { CheckSizePipe } from "./pipes/checkSize.pipe";
import { DeviceSizePipe } from "./pipes/deviceSize.pipe";
import { SizeMapPipe } from "./pipes/sizeMap.pipe";
import { FlexService } from "./core/flex.service";

@NgModule({
    imports: [CommonModule],
    declarations: [FlxPanelComponent,
                   FlxContainerComponent,
                   FlxGridComponent,
                   FlxColumnComponent,
                   FlxRowComponent,
                   FlxMaxSizeDirective,
                   FlxMinSizeDirective,
                   FlxSizeDirective,
                   FlxClassDirective,
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
              CheckSizePipe,
              DeviceSizePipe,
              SizeMapPipe],
    providers: [FlexService]
})
export class FlexModule { }
