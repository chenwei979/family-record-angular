import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ChangeFontSize } from '../../redux/actions/canvas';

@Component({
  selector: 'app-cut-button',
  templateUrl: './cut-button.component.html',
  styleUrls: ['./cut-button.component.css']
})
export class CutButtonComponent implements OnInit {
  buttonTitle: string;
  fontSize: number;

  constructor(private store: Store<CanvasSettings>) {
    this.buttonTitle = 'Add font size';

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