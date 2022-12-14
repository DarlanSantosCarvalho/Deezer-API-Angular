import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Musica3Component } from './musica3.component';

describe('Musica3Component', () => {
  let component: Musica3Component;
  let fixture: ComponentFixture<Musica3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Musica3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Musica3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
