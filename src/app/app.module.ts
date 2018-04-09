import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecordComponent } from './components/record/record.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RibbonComponent } from './components/ribbon/ribbon.component';
import { CutButtonComponent } from './components/cut-button/cut-button.component';

import { StoreModule } from '@ngrx/store';
import { canvasReducer } from './redux/reducers/canvas';

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
    FormsModule,
    StoreModule.forRoot({
      canvasSettings: canvasReducer,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
