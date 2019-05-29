import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/news.model';

@Component({
  selector: 'app-News',
  templateUrl: './barNews.component.html',
  styleUrls: ['./barNews.component.css']
})

export class barNewsComponent implements OnInit {
  @Input() topNews: News[] = [];
  constructor() { } ngOnInit() {
  }
}
