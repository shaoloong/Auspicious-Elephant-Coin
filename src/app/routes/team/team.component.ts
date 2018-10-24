import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.less']
})
export class TeamComponent implements OnInit {

  config: any;
  constructor(
    private route: ActivatedRoute,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.config = this.route.snapshot.data;
    this.titleService.setTitle(this.config.title);
  }

}
