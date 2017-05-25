import { Injectable  } from '@angular/core';
interface IAtGrid {
    bindData(arg:number): void
}
@Injectable()
export class AtGrid implements IAtGrid {
    bindData(): void {
        console.log('bind calling')
    
    }
}