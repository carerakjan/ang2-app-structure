import { OnInit, Input } from '@angular/core';
import { ArticleDecorator } from 'app/decorators/article.decorator';
import { ArticleInterface } from 'app/interfaces/article.interface';
import { Article } from 'app/models/article.model';

@ArticleDecorator({
  selector:'app-article-second'
  ,styleUrls: ['./article2.component.css']
})
export class ArticleComponent2 implements OnInit, ArticleInterface {

  @Input() article: Article;

  voteUp() {
    return false;
  }

  voteDown() {
    return false;
  }

  ngOnInit() {
  }

}
