import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewproccedComponent } from './reviewprocced.component';

describe('ReviewproccedComponent', () => {
  let component: ReviewproccedComponent;
  let fixture: ComponentFixture<ReviewproccedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewproccedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewproccedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
