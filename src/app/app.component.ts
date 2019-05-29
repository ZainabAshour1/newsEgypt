import { Component, OnInit } from '@angular/core';
import { News } from './news.model';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hello-angular';

  fetNewsRetrieved: News[] = [];
  topNewsRetrieved: News[] = [];

  constructor(private newsService: NewsService) { }
  ngOnInit() {
    this.newsService.getFeaturedNews().subscribe(resp => this.fetNewsRetrieved = resp as News[]);
    this.newsService.getTopNews().subscribe(resp => this.topNewsRetrieved = resp as News[]);
  }
}





