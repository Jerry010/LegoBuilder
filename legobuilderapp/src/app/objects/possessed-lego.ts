import { Lego } from './lego';

export class PossessedLego {
    quantity!: number;
    lego!: Lego;
    requiredBlocks!: any;

    constructor(quantity: number,lego: Lego, requiredBlocks:any){
        this.quantity = quantity;
        this.lego = lego;
        this.requiredBlocks = requiredBlocks;
    }
}