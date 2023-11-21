import { TestBed } from '@angular/core/testing';

import { FrameworkService } from './framework.service';
import { HttpClientModule } from '@angular/common/http';

describe('FrameworkService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: FrameworkService = TestBed.get(FrameworkService);
    expect(service).toBeTruthy();
  });
});
