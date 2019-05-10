import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioFootComponent } from './socio-foot.component';

describe('SocioFootComponent', () => {
  let component: SocioFootComponent;
  let fixture: ComponentFixture<SocioFootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocioFootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocioFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
