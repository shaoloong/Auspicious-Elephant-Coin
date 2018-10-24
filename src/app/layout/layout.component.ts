import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public icTwoIphones: string;
  constructor() { }

  ngOnInit() {
  }
  runParent(msg: string) {
    if (msg === 'th_TH') {
      this.icTwoIphones = '/assets/img/ic_two_iphones_th.png';
    } else if (msg === 'zh_CN') {
      this.icTwoIphones = '/assets/img/ic_two_iphones_zh.png';
    } else if (msg === 'en_US') {
      this.icTwoIphones = '/assets/img/ic_two_iphones_en.png';
    }
  }
}
