import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.less']
})
export class ClientComponent implements OnInit {
  config: any;
  icTwoIphones: string;
  constructor(
    private route: ActivatedRoute,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.config = this.route.snapshot.data;
    this.titleService.setTitle(this.config.title);
    this.icTwoIphones = localStorage.getItem('icTwoIphones');
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
