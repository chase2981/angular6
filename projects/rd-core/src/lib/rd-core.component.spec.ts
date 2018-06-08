import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdCoreComponent } from './rd-core.component';

describe('RdCoreComponent', () => {
  let component: RdCoreComponent;
  let fixture: ComponentFixture<RdCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
