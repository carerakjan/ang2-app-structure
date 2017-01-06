import { OnInit, Input } from '@angular/core';
import { ArticleDecorator } from 'app/decorators/article.decorator';
import { ArticleInterface } from 'app/interfaces/article.interface';
import { Article } from 'app/models/article.model';

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
