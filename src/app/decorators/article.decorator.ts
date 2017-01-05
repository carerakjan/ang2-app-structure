import { Component } from '@angular/core';

export function ArticleDecorator (annotation: any = {}) {

  return function (target: Function) {
    let _default = {
      selector: 'app-article',
      templateUrl: './../templates/article/article.component.html',
      styleUrls: ['./../templates/article/article.component.css'],
      host: {
        class: 'row'
      }
    };

    Object.keys(_default).forEach(function(key) {
      if (!annotation[key]) {
        annotation[key] = _default[key];
      }
    });

    Component(annotation)(target);
  };
}
