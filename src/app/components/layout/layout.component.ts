import {
  Component, OnInit, AfterViewInit, AfterContentInit, ComponentFactoryResolver, Injector, ApplicationRef, enableProdMode
} from '@angular/core';
import { RecordComponent } from '../record/record.component';

enableProdMode();

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, AfterViewInit, AfterContentInit {

  constructor(private injector: Injector
    , private app: ApplicationRef
    , private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
  }

  ngAfterViewInit() {
    this.init();
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
          height: '100%',
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
            const container = document.getElementById('solutionExplorerPanel');
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(RecordComponent);
            const ref = componentFactory.create(this.injector, [], container);
            this.app.attachView(ref.hostView);
          }
        }, {
          type: 'layoutPanel',
          title: 'Properties',
          contentContainer: 'PropertiesPanel'
        }]
      }]
    }];

    $('#dockingLayout').jqxDockingLayout({
      width: '100%',
      height: '100%',
      layout: layout,
      contextMenu: true
    });
  }
}
