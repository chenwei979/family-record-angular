import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ChangeFontSize } from '../../redux/actions/canvas';
import { AppState, selectCanvasSettingsFontSize } from '../../redux/app-state';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-cut-button',
  templateUrl: './cut-button.component.html',
  styleUrls: ['./cut-button.component.css']
})
export class CutButtonComponent implements OnInit {
  buttonTitle: string;
  fontSize: Observable<number>;
  fontSizeValue: number;

  constructor(private store: Store<AppState>) {
    this.buttonTitle = 'Add font size';
    this.fontSize = store.pipe(select(selectCanvasSettingsFontSize));
    this.fontSize.subscribe(value => {
      this.fontSizeValue = value;
    });
  }

  ngOnInit() {
  }


  onClick() {
    this.store.dispatch(new ChangeFontSize(this.fontSizeValue + 2));
  }
}

// class Variable {
//   Id: string;
//   Title: string;
//   Type: number;
//   DeviceId: string;
//   TagId: string;
//   Observable: any;
//
//   public constructor(id: string, title: string, type: number, deviceId: string, tagId: string) {
//     this.Id = id;
//     this.Title = title;
//     this.Type = type;
//     this.DeviceId = deviceId;
//     this.TagId = tagId;
//
//     //es6 generator
//     this.Observable = Rx.Observable.create((observer) => {
//       var callBackList = [];
//       callBackList.push((message: { driveId: string, tag: string, value: any }) => {
//         if (this.filter(message))
//           this.broadcast(message.value);
//       });
//     });
//   }
//
//   broadcast(value) {
//     observer(value);
//   }
//
//   filter(message: { driveId: string, tag: string, value: any }) {
//     return message.driveId === this.DeviceId && message.tag === this.TagId;
//   }
//
//   subscribe(callBack) {
//     return this.Observable.subscribe(callBack);
//   }
// }
