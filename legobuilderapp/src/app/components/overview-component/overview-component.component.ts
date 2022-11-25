import { Component, Input } from '@angular/core';
import { PossessedLego } from 'src/app/objects/possessed-lego';
import { User } from 'src/app/objects/user';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-overview-component',
  templateUrl: './overview-component.component.html',
  styleUrls: ['./overview-component.component.scss']
})

export class OverviewComponentComponent {

  @Input() user !: User;
  @Input() myLegoSets !: PossessedLego[];
  @Input() myLegoBlocks !: PossessedLego[];

  constructor(
    private apiService:ApiService
  ) { }

  public onNumberOfItemsInPossessionChanged(){
   
    //normally you would catch and see if the response is 200 or else do some error handling here as well
    this.apiService.updateUser(this.user).subscribe();
  }

}
