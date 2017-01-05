import { OnInit, Input } from '@angular/core';
import { ArticleDecorator } from './../../../decorators/article.decorator';
import { ArticleInterface } from './../../../interfaces/article.interface';
import { Article } from './../../../models/article.model';

@ArticleDecorator()
export class ArticleComponent implements OnInit, ArticleInterface {

  @Input() article: Article;

  voteUp() {
    this.article && this.article.voteUp();
    return false;
  }

  voteDown() {
    this.article && this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
