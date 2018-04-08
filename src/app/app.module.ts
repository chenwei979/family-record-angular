import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecordComponent } from './record/record.component';
import { LayoutComponent } from './layout/layout.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { CutButtonComponent } from './cut-button/cut-button.component';


@NgModule({
  declarations: [
    AppComponent,
    RecordComponent,
    LayoutComponent,
    RibbonComponent,
    CutButtonComponent
  ],
  entryComponents: [
    RecordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
