import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveViewComponent } from './approve-view.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

xdescribe('ApproveViewComponent', () => {
  let component: ApproveViewComponent;
  let fixture: ComponentFixture<ApproveViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveViewComponent ],
      imports: [HttpClientModule, RouterModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
