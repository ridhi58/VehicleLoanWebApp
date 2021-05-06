import { TestBed } from '@angular/core/testing';

import { UserApplyService } from './user-apply.service';

describe('UserApplyService', () => {
  let service: UserApplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserApplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
