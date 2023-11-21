import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { inject, TestBed } from '@angular/core/testing';
import { OrderByPipe } from './order-by.pipe';
import { ApprovalService } from '../services/approval.service';
import { HttpClientModule } from '@angular/common/http';

describe('OrderByPipe', () => {
  let appService;
  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          BrowserModule,
          HttpClientModule
        ],
        providers:[
          ApprovalService,
        ]
      });
      appService = TestBed.inject(ApprovalService); 
    });

  it('create an instance', () => {
    
    const pipe = new OrderByPipe(appService);
    expect(pipe).toBeTruthy();
  });
});
