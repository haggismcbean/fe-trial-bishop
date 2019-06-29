import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleSummaryComponent } from './article-summary/article-summary.component';
import { ArticleBodyComponent } from './article-body/article-body.component';
import { TimelineComponent } from './timeline/timeline.component';
import { MenuComponent } from './menu/menu.component';
import { TagsSelectorComponent } from './tags-selector/tags-selector.component';
import { TagsCreatorComponent } from './tags-creator/tags-creator.component';
import { SavedCheckboxComponent } from './saved-checkbox/saved-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleSummaryComponent,
    ArticleBodyComponent,
    TimelineComponent,
    MenuComponent,
    TagsSelectorComponent,
    TagsCreatorComponent,
    SavedCheckboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
