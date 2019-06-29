import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { MenuComponent } from './components/menu/menu.component';
import { TagsSelectorComponent } from './components/tags-selector/tags-selector.component';
import { SavedCheckboxComponent } from './components/saved-checkbox/saved-checkbox.component';

import { ArticleService } from './services/article/article.service';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { NewsApiService } from './services/news-api/news-api.service';

import { NewsEffects } from './effects/news.effects';

import * as NewsReducer from './reducers/news.reducer';

const components = [
  AppComponent,
  ArticleComponent,
  TimelineComponent,
  MenuComponent,
  TagsSelectorComponent,
  SavedCheckboxComponent
];

const services = [
  ArticleService,
  LocalStorageService,
  NewsApiService
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot({ articles: NewsReducer.reducer }),
    EffectsModule.forRoot([NewsEffects])
  ],
  providers: [
    Store,
    ...services
  ],
  exports: [
    ...components
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
