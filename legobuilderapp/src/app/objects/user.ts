import { PossessedLego } from './possessed-lego';

export class User {
    id!: number;
    name!: string;
    legoCollection!: PossessedLego[];

    constructor(id: number, name: string, possessedLego:PossessedLego[]){
        this.id = id;
        this.name = name;
        this.legoCollection = possessedLego;
    }
}