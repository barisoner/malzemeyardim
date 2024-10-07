import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurumTanimComponent } from './kurum-tanim.component';

describe('KurumTanimComponent', () => {
  let component: KurumTanimComponent;
  let fixture: ComponentFixture<KurumTanimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurumTanimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KurumTanimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
