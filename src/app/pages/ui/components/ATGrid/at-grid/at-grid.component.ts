import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { AtGridOptions, AtGridSortingOrder, AtGridColumn } from './at-grid-options';
// import { AtGridPaggingComponent } from '../at-grid-pagging/at-grid-pagging.component';

@Component({
  selector: 'at-grid',
  templateUrl: './at-grid.component.html',
  styleUrls: ['./at-grid.component.css']
})
export class AtGridComponent implements OnInit {
  @Output() onSortingColumnClick: EventEmitter<AtGridColumn> = new EventEmitter<AtGridColumn>();
  @Input() gridOptions: AtGridOptions;
  headerClass: string = 'sortable fa fa-fw fa-sort';
  constructor() {

  }
  getHeaderClass(header): string {
    switch (header.sortingOrder) {
      case AtGridSortingOrder.none:
        return 'sortable fa fa-fw fa-sort';
      // break;
      case AtGridSortingOrder.descending:
        return 'sortable fa fa-sort-asc';
      // break;
      case AtGridSortingOrder.ascending:
        return 'sortable fa fa-sort-desc';
      // break;
      default:
        break;
    }
  }

  sortingEvent(eve) {

    //let header = eve;

    switch (eve.sortingOrder) {
      case AtGridSortingOrder.none:
        if (eve.lastEffectedOrder == AtGridSortingOrder.ascending) {
          eve.sortingOrder = AtGridSortingOrder.descending;
          eve.lastEffectedOrder = AtGridSortingOrder.descending;
        } else {
          eve.sortingOrder = AtGridSortingOrder.ascending;
          eve.lastEffectedOrder = AtGridSortingOrder.ascending;
        }
        break;
      case AtGridSortingOrder.descending:
        eve.sortingOrder = AtGridSortingOrder.none
        break;
      case AtGridSortingOrder.ascending:
        eve.sortingOrder = AtGridSortingOrder.none;
        break;
      default:
        break;
    }
    this.getHeaderClass(eve);
    this.onSortingColumnClick.next(eve);
  }
  ngOnInit() {
  }

}
