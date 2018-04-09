import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ChangeFontSize } from '../../redux/actions/canvas';
import { AppState } from '../../redux/app-state';

@Component({
  selector: 'app-cut-button',
  templateUrl: './cut-button.component.html',
  styleUrls: ['./cut-button.component.css']
})
export class CutButtonComponent implements OnInit {
  buttonTitle: string;
  fontSize: number;

  constructor(private store: Store<AppState>) {
    this.buttonTitle = 'Add font size';
    this.fontSize = 16;

    const settings = store.pipe(select('canvasSettings'));
    settings.subscribe(item => {
      this.fontSize = item.fontSize;
    });
  }

  ngOnInit() {
  }


  onClick() {
    this.store.dispatch(new ChangeFontSize(this.fontSize + 2));
  }
}
