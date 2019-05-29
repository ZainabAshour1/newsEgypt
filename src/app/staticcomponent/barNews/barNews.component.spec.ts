import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { barNewsComponent } from './barNews.component';

describe('barNewsComponent', () => {
  let component: barNewsComponent;
  let fixture: ComponentFixture<barNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ barNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(barNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
