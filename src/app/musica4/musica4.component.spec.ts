import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Musica4Component } from './musica4.component';

describe('Musica4Component', () => {
  let component: Musica4Component;
  let fixture: ComponentFixture<Musica4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Musica4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Musica4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
