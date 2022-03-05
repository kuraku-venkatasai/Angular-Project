import { Component, OnInit } from '@angular/core';
import { TableDataService } from './table-data.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'project';
  displayedColumns: any = ['ID', 'Name', 'Team', 'Domain'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  constructor(private tableDataservice: TableDataService) {}

  ngOnInit(): any {
    this.tableDataservice.getUser().subscribe((data: any) => {
      this.dataSource = data;
      console.log(this.dataSource);
    });
  }
}
