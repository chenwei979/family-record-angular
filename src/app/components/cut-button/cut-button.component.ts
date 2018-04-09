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
