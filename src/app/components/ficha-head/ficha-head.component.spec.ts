import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaHeadComponent } from './ficha-head.component';

describe('FichaHeadComponent', () => {
  let component: FichaHeadComponent;
  let fixture: ComponentFixture<FichaHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
