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
  message: string;
  fontSize: Observable<number>;
  customStyle: any;

  constructor(private store: Store<AppState>) {
    this.message = 'Bruce Chen';
    this.fontSize = store.pipe(select(selectCanvasSettingsFontSize));
    this.fontSize.subscribe(value => {
      this.customStyle = {
        ...this.customStyle,
        fontSize: value + 'px'
      };
    });
  }

  ngOnInit() {
  }

  onClick() {
    alert('this is Bruce');
  }
}
