import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegoiaPage } from './juegoia.page';

describe('JuegoiaPage', () => {
  let component: JuegoiaPage;
  let fixture: ComponentFixture<JuegoiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
