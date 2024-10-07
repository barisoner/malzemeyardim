import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalzemeTanimComponent } from './malzeme-tanim.component';

describe('MalzemeTanimComponent', () => {
  let component: MalzemeTanimComponent;
  let fixture: ComponentFixture<MalzemeTanimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalzemeTanimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MalzemeTanimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
