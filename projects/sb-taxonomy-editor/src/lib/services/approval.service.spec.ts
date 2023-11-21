import { TestBed } from '@angular/core/testing';

import { ApprovalService } from './approval.service';
import { HttpClientModule } from '@angular/common/http';

describe('ApprovalService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ApprovalService = TestBed.get(ApprovalService);
    expect(service).toBeTruthy();
  });
});
