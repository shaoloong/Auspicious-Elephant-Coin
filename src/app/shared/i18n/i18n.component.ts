import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-i18n',
  templateUrl: './i18n.component.html',
  styleUrls: ['./i18n.component.less']
})
export class I18nComponent implements OnInit {
  @Output() private outer = new EventEmitter<string>();
  localLang = localStorage.getItem('localLang');
  selectedValue = 'th_TH';
  langIcon: string;
  whitePaperUrl: string;
  imgPhoneComputer: string;
  imgCard: string;
  imgPhone: string;
  icTwoIphones: string;
  constructor(public translate: TranslateService) {
    translate.addLangs(['th_TH', 'zh_CN', 'en_US']);
    translate.setDefaultLang('th_TH');
    this.langIcon = '/assets/img/ic_Thailand.png';
    this.whitePaperUrl = '/assets/files/whitepaper_th.pdf';
    localStorage.setItem('imgPhoneComputer', '/assets/img/img_phone_computer_th.png');
    localStorage.setItem('imgCard', '/assets/img/img_card_th.png');
    localStorage.setItem('imgPhone', '/assets/img/img_phone_th.png');
    localStorage.setItem('icTwoIphones', '/assets/img/ic_two_iphones_th.png');
    if (this.localLang) {
      if ( this.localLang === 'zh_CN' ) {
        this.langIcon = '/assets/img/ic_china.png';
        this.whitePaperUrl = '/assets/files/whitepaper_zh.pdf';
        localStorage.setItem('imgPhoneComputer', '/assets/img/img_phone_computer_zh.png');
        localStorage.setItem('imgCard', '/assets/img/img_card_zh.png');
        localStorage.setItem('imgPhone', '/assets/img/img_phone_zh.png');
        localStorage.setItem('icTwoIphones', '/assets/img/ic_two_iphones_zh.png');
      } else if ( this.localLang === 'en_US' ) {
        this.langIcon = '/assets/img/ic_English.png';
        this.whitePaperUrl = '/assets/files/whitepaper_en.pdf';
        localStorage.setItem('imgPhoneComputer', '/assets/img/img_phone_computer_en.png');
        localStorage.setItem('imgCard', '/assets/img/img_card_en.png');
        localStorage.setItem('imgPhone', '/assets/img/img_phone_en.png');
        localStorage.setItem('icTwoIphones', '/assets/img/ic_two_iphones_en.png');
      } else {
        this.langIcon = '/assets/img/ic_Thailand.png';
        this.whitePaperUrl = '/assets/files/whitepaper_th.pdf';
        localStorage.setItem('imgPhoneComputer', '/assets/img/img_phone_computer_th.png');
        localStorage.setItem('imgCard', '/assets/img/img_card_th.png');
        localStorage.setItem('imgPhone', '/assets/img/img_phone_th.png');
        localStorage.setItem('icTwoIphones', '/assets/img/ic_two_iphones_th.png');
      }
      this.selectedValue = this.localLang;
      this.translate.use(this.selectedValue);
    }
    localStorage.setItem('whitePaperUrl', this.whitePaperUrl);
    // 根据浏览器判断语种选择默认语言
    // const broswerLang = translate.getBrowserLang();
    // translate.use(broswerLang.match(/en|zh_CN/) ? broswerLang : 'zh_CN');
  }
  selectedLang = [
    { label: 'ภาษาไทย', value: 'th_TH'},
    { label: '简体中文', value: 'zh_CN'},
    { label: 'English', value: 'en_US'}
  ];
  selectLangLog(value): void {
    localStorage.setItem('localLang', value);
    this.translate.use(value);
    if ( value === 'zh_CN' ) {
      this.langIcon = '/assets/img/ic_china.png';
    } else if ( value === 'en_US' ) {
      this.langIcon = '/assets/img/ic_English.png';
    } else {
      this.langIcon = '/assets/img/ic_Thailand.png';
    }
    this.outer.emit(value);
  }
  ngOnInit() {
    const lang = localStorage.getItem('localLang');
    if (lang) {
      this.selectedValue = lang;
      this.outer.emit(lang);
    } else {
      this.selectedValue = 'th_TH';
      this.outer.emit('th_TH');
    }
  }

}
