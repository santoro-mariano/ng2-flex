import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { AppComponent } from "./app.component";
import { FlexModule } from "../../../lib/public_api";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }