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

  post =[
    {
      title: 'Fashion',
      thought: 'I love fashion'
    },
    {
      title: 'Food',
      thought: 'I can\'t for dinner'
    },
    {
      title: 'Dev.Build',
      thought: 'So happy we\'re almost doneeee!!'
    },
  ]
}
