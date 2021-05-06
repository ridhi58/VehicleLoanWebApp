import { TestBed } from '@angular/core/testing';

import { LoginDTOService } from './login-dto.service';

describe('LoginDTOService', () => {
  let service: LoginDTOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginDTOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
