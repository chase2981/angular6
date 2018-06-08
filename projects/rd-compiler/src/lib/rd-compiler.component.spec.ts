import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdCompilerComponent } from './rd-compiler.component';

describe('RdCompilerComponent', () => {
  let component: RdCompilerComponent;
  let fixture: ComponentFixture<RdCompilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdCompilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdCompilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
