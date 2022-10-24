import {AfterViewChecked, Component, OnInit, ViewChild} from '@angular/core';
import {PostService} from "../post.service";
import {RequestService} from "../request.service";
import {PaginationControlsDirective} from "ngx-pagination/lib/pagination-controls.directive";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  providers: [RequestService],
  styleUrls: ['./home-page.scss']
})

export class HomePageComponent implements OnInit{

  @ViewChild("paginator", {static: true}) paginator: PaginationControlsDirective | undefined;

  // @ts-ignore
  public filter: string = '';
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  types: string[] = [];
  totalCount: number = 0;
  pageCount: number = 0;
  mobileShow: boolean = false;

  constructor(private postService: PostService) {
  }

  ngOnInit(){
    this.fetchPosts();
    this.getMobileScreen();
  }

  fetchPosts(): void {
    this.postService.getAllPosts().subscribe(
      (response) => {
        this.POSTS = response;
        this.totalCount = response.length;
        this.pageCount = Math.ceil(this.totalCount/this.tableSize);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }

  changePageCount(){
    this.pageCount = Math.ceil(this.totalCount/this.tableSize);
  }

  changeTableSize(event: any){
    this.tableSize = event.target.innerHTML;
    if(this.page !== 1){
      this.page = 1;
      this.scrollToTop();
    }
  }

  getMobileScreen(){
    if(window.screen.width <= 650) {
     this.mobileShow = true;
    }
  }

  scrollToTop() {
    const el = document.getElementById('scroll-line');
    el?.scrollIntoView({behavior: 'smooth'});
  }

}
