import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactBoletaComponent } from './transact-boleta.component';

describe('TransactBoletaComponent', () => {
  let component: TransactBoletaComponent;
  let fixture: ComponentFixture<TransactBoletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactBoletaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactBoletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
