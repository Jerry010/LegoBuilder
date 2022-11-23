import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-overview-component',
  templateUrl: './overview-component.component.html',
  styleUrls: ['./overview-component.component.sass']
})
export class OverviewComponentComponent implements OnInit {

  constructor(
    private apiService:ApiService
  ) { }

  ngOnInit(): void {
    
  }

}
