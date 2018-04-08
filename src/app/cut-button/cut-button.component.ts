import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cut-button',
  templateUrl: './cut-button.component.html',
  styleUrls: ['./cut-button.component.css']
})
export class CutButtonComponent implements OnInit {
  buttonTitle: string;

  constructor() {
    this.buttonTitle = 'Custom cut button';
  }

  ngOnInit() {
  }

  onClick() {
    alert('This is cut button.');
  }
}
