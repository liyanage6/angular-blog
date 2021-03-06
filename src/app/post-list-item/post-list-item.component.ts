import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() postTitle : string;
  @Input() postContent : string;
  @Input() postCreated_at : Date;
  @Input() postLoveit: number;

  constructor() { }

  ngOnInit() {
  }

  setLike(){
    return this.postLoveit++ ;
  }

  setDislike(){
    return this.postLoveit-- ;
  }
}
