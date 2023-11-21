import { TestBed } from '@angular/core/testing';

import { TokenInterceptorService } from './token-interceptor.service';
import { HttpClientModule } from '@angular/common/http';

describe('TokenInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: TokenInterceptorService = TestBed.get(TokenInterceptorService);
    expect(service).toBeTruthy();
  });
});
