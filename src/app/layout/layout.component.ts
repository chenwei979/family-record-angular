import {
  Component, NgZone, OnInit, AfterViewInit, AfterContentInit, ViewChild, ViewContainerRef,
  ComponentFactoryResolver,
  Injector,
  ApplicationRef
} from '@angular/core';
import { RecordComponent } from '../record/record.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit, AfterContentInit {

  constructor(private injector: Injector
    , private app: ApplicationRef
    , private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngAfterViewInit() {
  }

  ngAfterContentInit(): void {
    this.init();
  }

  init() {
    // the 'layout' JSON array defines the internal structure of the docking layout
    const layout = [{
      type: 'layoutGroup',
      orientation: 'horizontal',
      items: [{
        type: 'layoutGroup',
        orientation: 'vertical',
        width: '100%',
        items: [{
          type: 'documentGroup',
          height: '100%',
          minHeight: 200,
          items: [{
            type: 'documentPanel',
            title: 'index.htm',
            contentContainer: 'Document1Panel',
            initContent: () => {
            }
          }]
        }]
      }]
    }];

    $(document.getElementById('dockingLayout')).jqxDockingLayout({ width: '100%', height: '100%', layout: layout, contextMenu: false });
  }
}
