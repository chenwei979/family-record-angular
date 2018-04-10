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
    const controlLayout = {
      type: 'tabbedGroup',
      width: '20%',
      items: [{
        type: 'layoutPanel',
        title: 'Controls',
        contentContainer: 'ControlPanel'
      }, {
        type: 'layoutPanel',
        title: 'Resource',
        contentContainer: 'ResourcePanel'
      }]
    };

    const designerLayout = {
      type: 'layoutGroup',
      width: '60%',
      items: [{
        type: 'documentGroup',
        height: '100%',
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
    };

    const propertyLayout = {
      type: 'tabbedGroup',
      width: '20%',
      items: [{
        type: 'layoutPanel',
        title: 'Properties',
        contentContainer: 'PropertiesPanel',
        initContent: () => {
          const container = document.getElementById('propertiesPanel');
          const componentFactory = this.componentFactoryResolver.resolveComponentFactory(RecordComponent);
          const ref = componentFactory.create(this.injector, [], container);
          this.app.attachView(ref.hostView);
        }
      }, {
        type: 'layoutPanel',
        title: 'Tools',
        contentContainer: 'ToolsPanel'
      }]
    };

    const layout = [{
      type: 'layoutGroup',
      orientation: 'horizontal',
      items: [controlLayout, designerLayout, propertyLayout]
    }];

    $('#dockingLayout').jqxDockingLayout({
      width: '100%',
      height: '100%',
      layout: layout,
      contextMenu: true
    });
  }
}
