import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coder',
  templateUrl: './coder.component.html',
  styleUrls: ['./coder.component.less']
})
export class CoderComponent implements OnInit {
  private hx: number = 5;
  private gx: number = 5;
  private collectionHx: any = [];
  private collectionGx: any;

  constructor() { }

  setInputsHx() {
    for (let i = 0; i < this.hx; i++) {
      this.collectionHx.push(i);
    }
  }

  setInputsGx() {
    this.collectionGx = [];
    for (let i = 0; i < this.gx - 1; i++) {
      this.collectionGx.push(i);
    }
  }

  ngOnInit() {
    this.setInputsHx();
    this.setInputsGx();

    let content: any = ( < HTMLInputElement > document.getElementById('lastgxword'));
    console.log(content.value);
  }

}
