import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingApprovalComponent } from './pending-approval.component';
import { HttpClientModule } from '@angular/common/http';

xdescribe('PendingApprovalComponent', () => {
  let component: PendingApprovalComponent;
  let fixture: ComponentFixture<PendingApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingApprovalComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
