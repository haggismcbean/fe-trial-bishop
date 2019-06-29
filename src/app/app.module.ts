import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { MenuComponent } from './components/menu/menu.component';

import { ArticleService } from './services/article/article.service';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { NewsApiService } from './services/news-api/news-api.service';

import { ArticleEffects } from './state-management/effects/article.effects';

import { menuReducer } from './state-management/reducers/news.reducers';

const components = [
  AppComponent,
  ArticleComponent,
  TimelineComponent,
  MenuComponent
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
    StoreModule.forRoot({ articles: menuReducer }),
    EffectsModule.forRoot([ArticleEffects])
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
