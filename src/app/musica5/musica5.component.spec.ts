import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Musica5Component } from './musica5.component';

describe('Musica5Component', () => {
  let component: Musica5Component;
  let fixture: ComponentFixture<Musica5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Musica5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Musica5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
