import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { MenuComponent } from './components/menu/menu.component';
import { TagsSelectorComponent } from './components/tags-selector/tags-selector.component';
import { TagsCreatorComponent } from './components/tags-creator/tags-creator.component';
import { SavedCheckboxComponent } from './components/saved-checkbox/saved-checkbox.component';

import { NewsApiService } from './services/news-api/news-api.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    TimelineComponent,
    MenuComponent,
    TagsSelectorComponent,
    TagsCreatorComponent,
    SavedCheckboxComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
  ],
  providers: [
    NewsApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
