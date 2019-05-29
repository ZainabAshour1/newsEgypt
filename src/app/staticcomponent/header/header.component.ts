import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { error } from 'util';
import { Department } from 'src/app/department.model';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dept:Department= new Department();

  departments:Department[]=[];
  constructor(private service:DepartmentService) { }

  ngOnInit() {
    this.service.getDepartments().subscribe(Response=>{this.departments= Response as Department[]},error=>{alert(1)},()=>{});
  }
}
