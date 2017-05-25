import { AtGridOptions, AtGridColumn } from './../ATGrid/at-grid/at-grid-options';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atgrid-example',
  templateUrl: './atgrid-example.component.html',
  styleUrls: ['./atgrid-example.component.scss'],
  providers:[AtGridOptions]
})

export class ATGridExampleComponent {
  atGridOptions: AtGridOptions;
  atGridColumns: AtGridColumn[];
  constructor() {
    this.atGridColumns = [new AtGridColumn('Name'),
      new AtGridColumn('Age', null, false),
      new AtGridColumn('Class'),
      new AtGridColumn('Cother'),
      new AtGridColumn('Qualification')
    ];
    this.atGridOptions = new AtGridOptions();
    this.atGridOptions.dataSource = [{
      Name: 'Mohammad Shamim Afridi',
      Age: 29,
      Qualification: 'Master'
    }, {
        Name: 'Eman',
        Age: 12,
        Class: '6th'
      }, {
        Name: 'Eman',
        Age: 12,
        Class: '6th'
      }, {
        Name: 'Eman',
        Age: 12,
        Class: '6th'
      }, {
        Name: 'Shakira',
        Age: 12,
        Class: '6th'
      }, {
        Name: 'Abdul Rehman',
        Age: 12,
        Class: '6th'
      }, {
        Name: 'Zunaira',
        Age: 12,
        Class: '7th'
      }, {
        Name: 'Eman',
        Age: 12,
        Class: '6th'
      }];
    this.atGridOptions.columns = this.atGridColumns;

  };
  columnSortedClicked(arg) {

    console.log(arg);
  }
}