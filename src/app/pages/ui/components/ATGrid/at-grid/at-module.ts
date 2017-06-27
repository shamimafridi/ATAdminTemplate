import * as  pag from './../at-grid-pagination/at-grid-pagination.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtGridComponent } from './at-grid.component';


@NgModule({
    imports: [CommonModule],
    exports: [AtGridComponent],
    declarations: [AtGridComponent, pag.AtGridPaginationComponent],// pagging component should not exposed to app module
    providers: [],
    
})
export class AtModule { }
