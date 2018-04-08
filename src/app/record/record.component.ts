import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  message: string;

  constructor() {
    this.message = 'Bruce Chen';
  }

  ngOnInit() {
  }

  onClick() {
    alert('this is Bruce');
  }
}
