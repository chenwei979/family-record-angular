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
  }


  onClick() {
    this.store.dispatch(new ChangeFontSize(this.fontSizeValue + 2));
  }
}

interface Message {
  driveId: string;
  tag: string;
  value: any;
}

class Variable {
  Id: string;
  Title: string;
  Type: number;
  DeviceId: string;
  TagId: string;
  Subject: Subject;
  LiveDataSubject: Subject;

  public constructor(id: string, title: string, type: number, deviceId: string, tagId: string, liveDataSubject: Subject) {
    this.Id = id;
    this.Title = title;
    this.Type = type;
    this.DeviceId = deviceId;
    this.TagId = tagId;
    this.LiveDataSubject = liveDataSubject;
    this.Subject = new Subject();

    //es6 generator
    liveDataObservable.subscribe((message: Message) => {
      if (this.filter(message)) {
        this.Subject.next(message.value);
      }
    });
  }

  filter(message: Message) {
    return message.driveId === this.DeviceId && message.tag === this.TagId;
  }

  subscribe(callBack) {
    return this.Subject.subscribe(callBack);
  }
}
