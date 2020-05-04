import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Input() form: boolean;
  @Input() popUp: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  
  title:string  = "";
  titleInput: string = "";
  thoughtInput: string = "";
  textInput: string = "";
  post: Post;
  @Output() submitted = new EventEmitter<Post>();
  @Output() popUpChanged = new EventEmitter<boolean>();

  close = (popUp) => {
    this.popUpChanged.emit(true);
  }
submit = (newTitle: string, newThought: string) => {
    const post:Post = { title: newTitle, thought: newThought};
    this.submitted.emit(post);
}
}
