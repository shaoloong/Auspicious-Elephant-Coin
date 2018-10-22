import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-i18n',
  templateUrl: './i18n.component.html',
  styleUrls: ['./i18n.component.less']
})
export class I18nComponent implements OnInit {
  localLang = localStorage.getItem('localLang');
  selectedValue = 'zh_CN';
  langIcon: string;
  whitePaperUrl: string;
  constructor(public translate: TranslateService) {
    translate.addLangs(['zh_CN', 'en_US', 'th_TH']);
    translate.setDefaultLang('zh_CN');
    this.langIcon = '/assets/img/ic_china.png';
    this.whitePaperUrl = '/assets/files/whitepaper_zh.pdf';
    if (this.localLang) {
      if ( this.localLang === 'zh_CN' ) {
        this.langIcon = '/assets/img/ic_china.png';
        this.whitePaperUrl = '/assets/files/whitepaper_zh.pdf';
      } else if ( this.localLang === 'en_US' ) {
        this.langIcon = '/assets/img/ic_English.png';
        this.whitePaperUrl = '/assets/files/whitepaper_en.pdf';
      } else {
        this.langIcon = '/assets/img/ic_Thailand.png';
        this.whitePaperUrl = '/assets/files/whitepaper_th.pdf';
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
    { label: '简体中文', value: 'zh_CN'},
    { label: 'English', value: 'en_US'},
    { label: 'ภาษาไทย', value: 'th_TH'}
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
  }
  ngOnInit() {
  }

}
