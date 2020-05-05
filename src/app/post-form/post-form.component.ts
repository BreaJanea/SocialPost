import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<Post>();
  @Output() closed = new EventEmitter();

  titleInput: string = "";
  thoughtInput: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  submitPost() {
    const post:Post = { title: this.titleInput, thought: this.thoughtInput};
    this.submitted.emit(post);
  }

  close() {
    this.closed.emit();
  }

}
