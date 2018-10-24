import { Component, OnInit, AfterViewInit  } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

declare let Swiper: any;
declare let $: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit, AfterViewInit {
  mySwiper: any;
  scrollMenu = false;
  config: any;
  imgPhoneComputer: string;
  imgCard: string;
  imgPhone: string;
  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.initSwiper();
    }, 20);
    this.config = this.route.snapshot.data;
    this.titleService.setTitle(this.config.title);
  }
  ngAfterViewInit() {
    const $timeline_block = $('.cd-timeline-block');
    $timeline_block.each(function() {
      if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
        $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
      }
    });
    $(window).on('scroll', function() {
      if ($(window).scrollTop() >= 600) {
        $('#isShowMenu').fadeIn();
      } else {
        $('#isShowMenu').hide();
      }
      $timeline_block.each(function() {
        if ( $(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
          $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
        }
      });
    });
  }
  initSwiper() {
    this.mySwiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }
  runParent(msg: string) {
    if (msg === 'th_TH') {
      this.imgPhoneComputer = '/assets/img/img_phone_computer_th.png';
      this.imgCard = '/assets/img/img_card_th.png';
      this.imgPhone = '/assets/img/img_phone_th.png';
    } else if (msg === 'zh_CN') {
      this.imgPhoneComputer = '/assets/img/img_phone_computer_zh.png';
      this.imgCard = '/assets/img/img_card_zh.png';
      this.imgPhone = '/assets/img/img_phone_zh.png';
    } else if (msg === 'en_US') {
      this.imgPhoneComputer = '/assets/img/img_phone_computer_en.png';
      this.imgCard = '/assets/img/img_card_en.png';
      this.imgPhone = '/assets/img/img_phone_en.png';
    }
  }
}
