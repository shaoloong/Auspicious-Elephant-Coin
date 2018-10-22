import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-whitepaper',
  templateUrl: './whitepaper.component.html',
  styleUrls: ['./whitepaper.component.css']
})
export class WhitepaperComponent implements OnInit, AfterViewInit {
  whitePaperUrl = localStorage.getItem('whitePaperUrl');
  constructor(private router: Router) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    document.getElementById('whitePaperPath').click();
    history.back();
    // this.router.navigate(['/index']);
  }
}
