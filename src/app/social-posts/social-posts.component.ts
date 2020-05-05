import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show: boolean = false;

  posts =[
    {
      title: 'Fashion',
      thought: 'I love fashion'
    },
    {
      title: 'Food',
      thought: 'I can\'t wait for dinner'
    },
    {
      title: 'Dev.Build',
      thought: 'So happy we\'re almost doneeee!!'
    },
  ];

  shouldShowForm: boolean = false;
 
  onSubmit = ($event) => {
      this.posts.unshift($event);
      this.shouldShowForm = false;
  }

  onDelete(index:number) {
    this.posts = [
      ...this.posts.slice(0,index),
      ...this.posts.slice(index+1, this.posts.length)
    ]
  }

  showForm():void {
    this.shouldShowForm = true;
  }

  hideForm():void {
    this.shouldShowForm = false;
  }

}
