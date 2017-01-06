import { Component } from '@angular/core';
import { Article } from './models/article.model';
import { ArticleService } from './services/articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Array<Article>;

  constructor(private articleService:ArticleService = new ArticleService()) {

    this.articleService.onLoadSuccess.subscribe(function() {
      console.log('Articles load success!!');
    });

    this.articleService.fetch().then(articles => {
      this.articles = articles;
    });
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article(title.value, link.value));
    title.value = link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return (this.articles || []).sort((a: Article, b: Article) => b.votes - a.votes);
  }

  isArticlesLoad(): boolean {
    return !!(this.articles && this.articles.length);
  }
}
