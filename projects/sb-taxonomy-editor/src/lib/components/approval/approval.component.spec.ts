import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalComponent } from './approval.component';
import { HttpClientModule } from '@angular/common/http';

xdescribe('ApprovalComponent', () => {
  let component: ApprovalComponent;
  let fixture: ComponentFixture<ApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
