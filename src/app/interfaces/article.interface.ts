import { Article } from 'models/article.model';

export interface ArticleInterface {
  article: Article;
  voteUp():void;
  voteDown():void;
}
