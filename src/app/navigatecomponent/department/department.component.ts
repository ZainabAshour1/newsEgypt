import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/news.model';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  id:number;
  news:News= new News();
  newsArray:News[]=[];
  constructor(private service:NewsService,private activatedRoute:ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(pa=>{this.news.ID=+pa.get('id');
    this.service.getByID(this.news.ID).subscribe(response=>{this.newsArray=response as News[]},error=>{alert(3)});
  });
  }
}
