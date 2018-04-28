import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexHomePageComponent } from './index-home-page.component';

describe('IndexHomePageComponent', () => {
  let component: IndexHomePageComponent;
  let fixture: ComponentFixture<IndexHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
