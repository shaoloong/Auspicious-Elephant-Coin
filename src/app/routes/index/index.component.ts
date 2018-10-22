import { Component, OnInit, AfterViewInit  } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
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
  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.initSwiper();
    }, 20);
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
}
