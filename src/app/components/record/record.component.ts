import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { CHANGE_FONT_SIZE } from '../../redux/actions/canvas';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  settings: Observable<CanvasSettings>;
  message: string;
  myStyle: any;

  constructor(private store: Store<CanvasSettings>) {
    this.myStyle = {
      fontSize: '16px'
    };

    this.settings = store.pipe(select('canvasSettings'));
    this.settings.subscribe(item => {
      this.myStyle = {
        ...this.myStyle,
        fontSize: item.fontSize + 'px'
      };
    });
    this.message = 'Bruce Chen';
  }

  ngOnInit() {
    this.store.dispatch({
      type: CHANGE_FONT_SIZE,
      payload: 18
    });
  }

  onClick() {
    alert('this is Bruce');
  }
}
