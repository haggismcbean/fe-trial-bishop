import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../../services/article/article.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public tags;

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.tags = _.keys(this.articleService.TAGS);
  }

  public selectAllArticles() {
    console.log('select all articles');
  }

  public selectArticles(tag) {
    console.log('select articles of ', tag);
  }

  public selectStarredArticles() {
    console.log('select starred articles');
  }

}
