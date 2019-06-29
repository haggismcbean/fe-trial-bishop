import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { MenuComponent } from './components/menu/menu.component';
import { TagsSelectorComponent } from './components/tags-selector/tags-selector.component';
import { SavedCheckboxComponent } from './components/saved-checkbox/saved-checkbox.component';

import { ArticleService } from './services/article/article.service';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { NewsApiService } from './services/news-api/news-api.service';

const components = [
  AppComponent,
  ArticleComponent,
  TimelineComponent,
  MenuComponent,
  TagsSelectorComponent,
  SavedCheckboxComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
  ],
  providers: [
    NewsApiService
  ],
  exports: [
    ...components
  ]
  bootstrap: [AppComponent]
})
export class AppModule { }
