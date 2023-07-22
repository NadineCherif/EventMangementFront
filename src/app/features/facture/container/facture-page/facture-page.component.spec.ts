import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturePageComponent } from './facture-page.component';

describe('FacturePageComponent', () => {
  let component: FacturePageComponent;
  let fixture: ComponentFixture<FacturePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacturePageComponent]
    });
    fixture = TestBed.createComponent(FacturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
