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
  @ViewChild('solutionExplorerPanel', {read: ViewContainerRef})
  solutionExplorerPanel: ViewContainerRef;

  @ViewChild('dockingLayout', {read: ViewContainerRef})
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
    }, 2000);
  }

  init() {
    // the 'layout' JSON array defines the internal structure of the docking layout
    const layout = [{
      type: 'layoutGroup',
      orientation: 'horizontal',
      items: [{
        type: 'autoHideGroup',
        alignment: 'left',
        width: '20%',
        unpinnedWidth: '20%',
        items: [{
          type: 'layoutPanel',
          title: 'Toolbox',
          contentContainer: 'ToolboxPanel'
        }, {
          type: 'layoutPanel',
          title: 'Help',
          contentContainer: 'HelpPanel'
        }]
      }, {
        type: 'layoutGroup',
        orientation: 'vertical',
        width: '50%',
        items: [{
          type: 'documentGroup',
          height: '50%',
          minHeight: 200,
          items: [{
            type: 'documentPanel',
            title: 'index.htm',
            contentContainer: 'Document1Panel',
            initContent: function () {
            }
          }, {
            type: 'documentPanel',
            title: 'New Document',
            contentContainer: 'Document2Panel',
            initContent: function () {
            }
          }]
        }, {
          type: 'tabbedGroup',
          height: '50%',
          minHeight: 200,
          pinnedHeight: 30,
          items: [{
            type: 'layoutPanel',
            title: 'Error List',
            contentContainer: 'ErrorListPanel'
          }, {
            type: 'layoutPanel',
            title: 'Performance',
            contentContainer: 'PerformancePanel',
            selected: true,
            initContent: function () {
            }
          }]
        }]
      }, {
        type: 'tabbedGroup',
        width: '30%',
        minWidth: 200,
        items: [{
          type: 'layoutPanel',
          title: 'Solution Explorer',
          contentContainer: 'SolutionExplorerPanel',
          initContent: () => {
          }
        }, {
          type: 'layoutPanel',
          title: 'Properties',
          contentContainer: 'PropertiesPanel'
        }]
      }]
    }];

    $(this.dockingLayout.element.nativeElement).jqxDockingLayout({width: '100%', height: '100%', layout: layout, contextMenu: false});
  }
}
