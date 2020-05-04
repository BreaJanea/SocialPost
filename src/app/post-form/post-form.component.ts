import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() form: boolean;
  @Input() popUp: boolean;
  titleInput: string = null;
  thoughtInput: string = null;
  post: Post;
  @Output() submitted = new EventEmitter<post>();
  @Output() popUpChanged = new EventEmitter<boolean>();
  close = (popUp) => {
    this.popUpChanged.emit(true);
}
submit = (newTitle: string, newThought: string) => {
    const post = { postTitle: newTitle, postThought: newThought};
    this.submitted.emit(post);
}
}
