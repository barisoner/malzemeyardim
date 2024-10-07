import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalzemeGrubuComponent } from './malzeme-grubu.component';

describe('MalzemeGrubuComponent', () => {
  let component: MalzemeGrubuComponent;
  let fixture: ComponentFixture<MalzemeGrubuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalzemeGrubuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MalzemeGrubuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
