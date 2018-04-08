import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CHANGE_FONT_SIZE} from '../redux/actions/canvas';

@Component({
  selector: 'app-cut-button',
  templateUrl: './cut-button.component.html',
  styleUrls: ['./cut-button.component.css']
})
export class CutButtonComponent implements OnInit {
  buttonTitle: string;
  fontSize: number;

  constructor(private store: Store<CanvasSettings>) {
    this.buttonTitle = 'Custom cut button';
    this.fontSize = 16;
  }

  ngOnInit() {
  }


  onClick() {
    this.fontSize = this.fontSize + 2;
    this.store.dispatch({
      type: CHANGE_FONT_SIZE,
      payload: this.fontSize
    });
  }
}
