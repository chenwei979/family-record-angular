import {
  Component, OnInit, AfterViewInit, AfterContentInit, ViewChild, ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';
import { RecordComponent } from '../record/record.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit, AfterContentInit {
  @ViewChild('solutionExplorerPanel', { read: ViewContainerRef })
  solutionExplorerPanel: ViewContainerRef;

  @ViewChild('dockingLayout', { read: ViewContainerRef })
  dockingLayout: ViewContainerRef;

  constructor(private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngAfterViewInit() {
  }

  ngAfterContentInit(): void {
    const recordComponentFactory = this.componentFactoryResolver.resolveComponentFactory(RecordComponent);
    this.solutionExplorerPanel.createComponent(recordComponentFactory);
    setTimeout(() => {
      this.init();
    }, 200);
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
            initContent: function () {
            }
          }]
        }]
      }]
    }];

    const ele = $(this.dockingLayout.element.nativeElement);
    ele.jqxDockingLayout({ width: '100%', height: '100%', layout: layout, contextMenu: false });
  }
}
