import { UserService } from './UserService';
import { IUserListResponse } from './modal';
import { AtGridOptions, AtGridColumn } from './../ATGrid/at-grid/at-grid-options';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atgrid-example',
  templateUrl: './atgrid-example.component.html',
  styleUrls: ['./atgrid-example.component.scss'],
  providers: [AtGridOptions]
})

export class ATGridExampleComponent {
  atGridOptions: AtGridOptions;
  atGridColumns: AtGridColumn[];
  constructor(private userService: UserService) {

    this.atGridOptions = new AtGridOptions();
    this.atGridOptions.pageCount = 1;
    this.atGridOptions.pageLimit = 5;
    this.atGridOptions.pageOffset = 0;
    this.atGridColumns = [
      new AtGridColumn('name', null, true, "Name"),
      new AtGridColumn('email', null, true, "Email"),
      //new AtGridColumn('Cother'),
      //new AtGridColumn('Qualification')
    ];
    this.getUserList(0, this.atGridOptions.pageLimit);

    this.atGridOptions.columns = this.atGridColumns;

  }
  onPageChange(pageNo) {
    this.getUserList(pageNo, this.atGridOptions.pageLimit);
  }
  public getUserList(pageNo: number, limit: number): void {
    this.userService.getUserList(limit, pageNo)
      .subscribe((data) => {
        console.log(data)
        if (data) {
          this.atGridOptions.dataSource = data.page_count.docs;
          this.atGridOptions.pageCount = data.page_count.total;
          this.atGridOptions.pageOffset = data.page_count.offset;

          // this.atGridOptions.pageCount = 10;
          //alert('suc');

        } else {

        }
      });

  }
  columnSortedClicked(arg) {

    console.log(arg);
  }
}