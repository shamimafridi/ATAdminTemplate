import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ATGridExampleComponent } from './atgrid-example.component';

describe('ATGridExampleComponent', () => {
  let component: ATGridExampleComponent;
  let fixture: ComponentFixture<ATGridExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ATGridExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ATGridExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
