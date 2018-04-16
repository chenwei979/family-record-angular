import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ChangeFontSize } from '../../redux/actions/canvas';
import { AppState, selectCanvasSettingsFontSize } from '../../redux/app-state';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

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
    const liveDataSubject = new Subject();
    var v = new Variable('id', 'title', 1, 'deviceId', 'tagId', liveDataSubject);
    liveDataSubject.next({
      driveId: 'deviceId',
      tagId: 'tagId',
      value: '1',
    });
    v.subscribe((val) => console.log(val));
    liveDataSubject.next({
      driveId: 'deviceId',
      tagId: 'tagId',
      value: '2',
    });
  }


  onClick() {
    this.store.dispatch(new ChangeFontSize(this.fontSizeValue + 2));
  }
}

interface Message {
  driveId: string;
  tagId: string;
  value: any;
}

class Variable {
  private Id: string;
  private Title: string;
  private Type: number;
  private DeviceId: string;
  private TagId: string;
  private InternalSubject: Subject<any>;
  private LiveDataSubject: Subject<any>;

  public constructor(id: string, title: string, type: number, deviceId: string, tagId: string, liveDataSubject: Subject<any>) {
    this.Id = id;
    this.Title = title;
    this.Type = type;
    this.DeviceId = deviceId;
    this.TagId = tagId;
    this.LiveDataSubject = liveDataSubject;
    this.InternalSubject = new Subject();

    //es6 generator
    this.LiveDataSubject.subscribe((message: Message) => {
      if (this.filter(message)) {
        this.InternalSubject.next(message.value);
      }
    });
  }

  private filter(message: Message) {
    return message.driveId === this.DeviceId && message.tagId === this.TagId;
  }

  public subscribe(callBack) {
    return this.InternalSubject.subscribe(callBack);
  }
}
