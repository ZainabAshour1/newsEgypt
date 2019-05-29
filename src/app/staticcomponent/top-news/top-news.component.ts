import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/news.model';

@Component({
  selector: 'top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit {

 topNews: News[] = [];
  constructor(private newsService: NewsService) { } ngOnInit() {
    this.newsService.getTopNews().subscribe(resp => this.topNews = resp as News[]);
  }
}
