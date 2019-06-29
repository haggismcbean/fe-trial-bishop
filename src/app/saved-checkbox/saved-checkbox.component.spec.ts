import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCheckboxComponent } from './saved-checkbox.component';

describe('SavedCheckboxComponent', () => {
  let component: SavedCheckboxComponent;
  let fixture: ComponentFixture<SavedCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
