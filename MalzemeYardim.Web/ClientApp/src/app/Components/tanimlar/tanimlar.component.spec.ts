import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanimlarComponent } from './tanimlar.component';

describe('TanimlarComponent', () => {
  let component: TanimlarComponent;
  let fixture: ComponentFixture<TanimlarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanimlarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TanimlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
