import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StokDurumComponent } from './stok-durum.component';

describe('StokDurumComponent', () => {
  let component: StokDurumComponent;
  let fixture: ComponentFixture<StokDurumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StokDurumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StokDurumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
