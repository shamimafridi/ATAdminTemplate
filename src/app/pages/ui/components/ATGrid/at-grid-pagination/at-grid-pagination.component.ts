import { Observable } from 'rxjs/Rx';
import { PagerService } from './pagerService';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'at-grid-pagination',
  templateUrl: './at-grid-pagination.component.html',
  styleUrls: ['./at-grid-pagination.component.scss'],
  providers: [PagerService]
})
export class AtGridPaginationComponent implements OnInit {
  @Input() offset: number = 0;
  @Input() limit: number = 10;
  @Input() size: number = 1;
  @Input() range: number = 5;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  currentPage: number;
  totalPages: number;
  pages: Observable<number[]>;
  constructor() { }

  ngOnInit() {
    this.getPages(this.offset, this.limit, this.size);
  }


  isValidPageNumber(page: number, totalPages: number): boolean {
    return page > 0 && page <= totalPages;
  }

 selectPage(page: number, event) {
  this.cancelEvent(event);
  if (this.isValidPageNumber(page, this.totalPages)) {
   // this.pageChange.emit((page - 1) * this.limit);
    this.pageChange.emit(page);
  }
}
  
cancelEvent(event) {
  event.preventDefault();
}
  getPages(offset: number, limit: number, size: number) {
    this.currentPage = this.getCurrentPage(offset, limit);
    this.totalPages = this.getTotalPages(limit, size);
    this.pages = Observable.range(-this.range, this.range * 2 + 1)
      .map(offset => this.currentPage + offset)
      .filter(page => this.isValidPageNumber(page, this.totalPages))
      .toArray();
  }
  getCurrentPage(offset: number, limit: number): number {
    return Math.floor(offset / limit) + 1;
  }

  getTotalPages(limit: number, size: number): number {
    return Math.ceil(Math.max(size, 1) / Math.max(limit, 1));
  }

  ngOnChanges() {
    this.getPages(this.offset, this.limit, this.size);

  }
  
}
