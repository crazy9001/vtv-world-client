import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHeaderSidebarComponent } from './admin-header-sidebar.component';

describe('AdminHeaderSidebarComponent', () => {
  let component: AdminHeaderSidebarComponent;
  let fixture: ComponentFixture<AdminHeaderSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHeaderSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHeaderSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
