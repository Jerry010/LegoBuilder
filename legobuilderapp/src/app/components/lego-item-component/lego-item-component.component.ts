import { Component, Input, Output, EventEmitter } from '@angular/core';
import {PossessedLego} from '../../objects/possessed-lego';

@Component({
  selector: 'app-lego-item-component',
  templateUrl: './lego-item-component.component.html',
  styleUrls: ['./lego-item-component.component.scss']
})
export class LegoItemComponentComponent{

  @Input() possessedLegoItem!: PossessedLego;
  @Input() isLegoBlock : boolean = true;
  @Output() numberOfItemsInPossessionChanged = new EventEmitter<number>();
  public showAddItemsField:boolean = false;
  public inputError = '';

  constructor() { }

  public changedNumberOfItemsInPossession(event:any){ 
    //stop event from bubbeling up the dom tree
    event.stopPropagation();

    if(this.userInputNumberIsValid()){
      this.numberOfItemsInPossessionChanged.emit(this.possessedLegoItem.quantity);
      this.showAddItemsField = false;
    }
    
  }

  private userInputNumberIsValid(){

    if(this.possessedLegoItem.quantity > -1){
      this.inputError = '';
      return true;
    }
    else{
      this.inputError = 'Please input a number bigger than 0';
      return false;
    }
  }

  public toggleShowAddItemsField(){

    //if you can hide with error the 'design' breaks
    if(this.userInputNumberIsValid()){
      this.showAddItemsField = !this.showAddItemsField;
    }
  }

  public preventPropagation(event:any){
    event.stopPropagation();
  }

}
