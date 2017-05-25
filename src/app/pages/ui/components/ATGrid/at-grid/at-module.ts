import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtGridComponent }   from './at-grid.component';


@NgModule({
    imports: [CommonModule],
    exports: [AtGridComponent],
    declarations: [AtGridComponent],// pagging component should not exposed to app module
    providers: [],
})
export class AtModule { }
