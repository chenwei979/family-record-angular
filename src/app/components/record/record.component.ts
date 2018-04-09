import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState, selectCanvasSettingsFontSize } from '../../redux/app-state';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  fontSize: Observable<number>;
  customStyle: any;
  message: string;

  constructor(private store: Store<AppState>) {
    this.fontSize = store.pipe(select(selectCanvasSettingsFontSize));
    this.fontSize.subscribe(fontSize => {
      this.customStyle = {
        ...this.customStyle,
        fontSize: fontSize + 'px'
      };
    });
    this.message = 'Bruce Chen';
  }

  ngOnInit() {
  }

  onClick() {
    alert('this is Bruce');
  }
}
