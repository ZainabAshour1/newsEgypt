import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'features-news',
  templateUrl: './features-news.component.html',
  styleUrls: ['./features-news.component.css']
})
export class FeaturesNewsComponent implements OnInit {
  featuredNews:News[]=[];
  
  constructor(private newsService:NewsService) { }
  ngOnInit() {
    this.newsService.getFeaturedNews().subscribe(resp=>this.featuredNews=resp as News[]);
  } 

}
