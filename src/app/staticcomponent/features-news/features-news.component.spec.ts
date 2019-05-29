import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesNewsComponent } from './features-news.component';

describe('FeaturesNewsComponent', () => {
  let component: FeaturesNewsComponent;
  let fixture: ComponentFixture<FeaturesNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
