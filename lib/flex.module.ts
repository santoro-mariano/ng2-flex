import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FlxBaseComponent, FlxPanelComponent, FlxContainerComponent, FlexService } from "./core";
import { FlxGridElementComponent, FlxGridComponent, FlxColumnComponent, FlxRowComponent } from "./grid";
import { FlxMaxSizeDirective, FlxMinSizeDirective, FlxSizeDirective, FlxClassDirective, FlxOrderDirective } from "./directives";
import { CheckSizePipe, DeviceSizePipe, SizeMapPipe } from "./pipes";

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
