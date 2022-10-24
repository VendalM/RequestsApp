import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../request.service";


@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.html',
  providers: [RequestService],
  styleUrls: ['./detail-page.scss']
})

export class DetailPageComponent implements OnInit{
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _requestsService: RequestService,
  ) {}

  requestId: number = +this._activatedRoute.snapshot.queryParams["id"];
  request: any;

  ngOnInit() {
    this.getRequest();
  }

  getRequest(){
    this._requestsService.getRequests().subscribe( (result) =>
    {
     this.request = result.filter( (ships: { id: number | any[]; }) => {
       return ships?.id === this.requestId;
     })
      console.log(this.request)
    }
    )
  }
}
