import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Musica2Component } from './musica2.component';

describe('Musica2Component', () => {
  let component: Musica2Component;
  let fixture: ComponentFixture<Musica2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Musica2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Musica2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
