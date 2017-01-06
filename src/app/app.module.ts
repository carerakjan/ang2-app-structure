import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './components/core/article/article.component';
import { ArticleComponent2 } from './components/licensee/article/article2.component';

import { ArticleService } from './services/articles.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleComponent2
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
