import { Injectable, EventEmitter } from '@angular/core';
import { Article } from 'app/models/article.model';

@Injectable()
export class ArticleService {

  onLoadSuccess: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('New instance of ArticleService...');
  }

  fetch():Promise<Article[]> {

    var articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(articles);
        this.onLoadSuccess.emit(articles);
      },1000);
    });
  }
}
