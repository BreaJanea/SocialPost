import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() post: Post;
  @Output() deleted = new EventEmitter<boolean>();

  
}
