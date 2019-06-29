import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import { TimelineComponent } from './timeline.component';
import { ArticleComponent } from '../article/article.component';

import { NewsApiService } from '../../services/news-api/news-api.service';

describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineComponent, ArticleComponent ],
      providers: [ NewsApiService, HttpClient, HttpHandler, provideMockStore() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
