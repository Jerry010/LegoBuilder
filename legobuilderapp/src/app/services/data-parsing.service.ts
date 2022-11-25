import { Injectable } from '@angular/core';
import { PossessedLego } from '../objects/possessed-lego';
import {User} from '../objects/user';
import { isNullOrUndefined } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class DataParsingService {

  constructor() {}

  

  public sortLegoItemsIntoSetsAndBlocks(user:User):any[]{

    let myLegoBlocks:PossessedLego[] = [];
    let myLegoSets:PossessedLego[] = [];
    user.legoCollection.forEach(collectionItem => {
      //normally you would also have an else clause and prefer to have another identifier than the hasOwnProperty check
      // to see if it is a lego set or block like maybe an SKU that starts with a certain letter or code...
       
      if(!collectionItem.hasOwnProperty('requiredBlocks')){
        myLegoBlocks.push(collectionItem);
      }else if(collectionItem.hasOwnProperty('requiredBlocks')){
        myLegoSets.push(collectionItem);
      }

    });

    return [myLegoBlocks,myLegoSets];
  }

}
