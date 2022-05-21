import { Component, OnInit, ViewChild } from '@angular/core';
import { TableDataService } from './table-data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import * as moment from 'moment';
import { User } from './user';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'project';
  displayedColumns: any = ['ID', 'Name', 'Team', 'Domain'];
  public dataSource: MatTableDataSource<User>;
  public items = [
    { name: 'Bike', price: '100' },
    { name: 'TV', price: '200' },
    { name: 'Ablum', price: '10' },
    { name: 'Book', price: '5' },
    { name: 'Phone', price: '500' },
    { name: 'Computer', price: '1000' },
    { name: 'Keyboard', price: '25' }
  ];

  timeNow = '2016-01-16T16:00:00';
  since: any;

  public sai: { name: string; price: string; };
  constructor(private tableDataservice: TableDataService) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  // public sample = this.items.find((res) => {
  // return res.price === '25';
  // });

  ngOnInit(): void {
    this.getTableData();
    this.items.map((resp) => {
      //   // this.sai = resp;
      return resp.name;
    });
    // });
    // console.log(this.sample);
    // this.since = new Date(this.timeNow);
    this.since = new Date('2016-01-16T16:00:00');
    // console.log('check timestamps', this.since.getTime());
    console.log('check timestamps', moment('2016-01-16T16:00:00').fromNow(), this.since.get);

  }

  getTableData(): void {
    this.tableDataservice.getUser().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      //  const item =  data.map((element: any) => {
      // return element;
      // });
      //  this.dataSource = item;
    });
  }

}
