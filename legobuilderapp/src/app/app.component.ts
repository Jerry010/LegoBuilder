import { Component, OnInit } from '@angular/core';
import {User} from './objects/user';
import { ApiService } from 'src/app/services/api-service.service';
import { DataParsingService } from 'src/app/services/data-parsing.service';
import { PossessedLego } from './objects/possessed-lego';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public loggedInUser!: User;
  public contentFetched:boolean = false;
  public myLegoSetCollection:PossessedLego[] = [];
  public myLegoBlockCollection:PossessedLego[] = [];

  constructor(
    private apiService:ApiService,
    private dataParsingService:DataParsingService
  ){

  }

  ngOnInit(): void {

    this.apiService.getUserById(1).subscribe((response:User[]) => {
     
      //get the first of the array of users that are returned, normally this should return either just a user object or error...
      this.loggedInUser = response[0];

      const sortedItems = this.dataParsingService.sortLegoItemsIntoSetsAndBlocks(this.loggedInUser);
      this.myLegoBlockCollection = sortedItems[0];
      this.myLegoSetCollection = sortedItems[1];

      this.contentFetched = true;

    });

  
  }
  
}
