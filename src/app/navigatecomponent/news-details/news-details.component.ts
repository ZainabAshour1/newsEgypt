import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/news.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  news: News = new News;
  id: number;
  //isLoaded:boolean;
  constructor(private newsService: NewsService, private activatedRoute: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(pa => {
      this.id = +pa.get('id')
      this.newsService.getNewsDetails(this.id).subscribe(resp => { resp = this.news = resp as News }, error => { alert(3) });
    });
  }
  back() {
    this.router.navigate([`department/${this.news.DepartmentID}`]);
  }
}
