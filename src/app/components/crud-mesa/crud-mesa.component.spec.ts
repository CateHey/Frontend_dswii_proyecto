import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMesaComponent } from './crud-mesa.component';

describe('CrudMesaComponent', () => {
  let component: CrudMesaComponent;
  let fixture: ComponentFixture<CrudMesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudMesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
