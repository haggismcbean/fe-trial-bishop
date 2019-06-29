import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsCreatorComponent } from './tags-creator.component';

describe('TagsCreatorComponent', () => {
  let component: TagsCreatorComponent;
  let fixture: ComponentFixture<TagsCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
