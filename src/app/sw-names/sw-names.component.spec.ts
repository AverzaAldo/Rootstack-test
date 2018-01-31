import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwNamesComponent } from './sw-names.component';

describe('SwNamesComponent', () => {
  let component: SwNamesComponent;
  let fixture: ComponentFixture<SwNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
