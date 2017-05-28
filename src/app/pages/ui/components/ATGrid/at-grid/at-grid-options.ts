export class AtGridOptions {
    columns: AtGridColumn[];
    dataSource: any[];
    pageCount: number;
    pageLimit: number;
    pageOffset: number;
    pageNumber:number;

}
export class AtGridColumn {
    lastEffectedOrder: AtGridSortingOrder = AtGridSortingOrder.ascending;
    sortingOrder: AtGridSortingOrder = AtGridSortingOrder.none;
    constructor(private name: string, private type?: string, private visible?: boolean,
        private displayText?: string, private format?: string) {
    };
}
export enum AtGridSortingOrder {
    none = 0,
    ascending = 1,
    descending = 2

}