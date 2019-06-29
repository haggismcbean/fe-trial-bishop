import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      providers: [ HttpClient, HttpHandler, provideMockStore() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create errr', () => {
    expect(component).toBeTruthy();
  });
});
