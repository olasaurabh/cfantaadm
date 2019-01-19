import { TestBed } from '@angular/core/testing';

import { TextbookService } from './textbook.service';

describe('TextbookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextbookService = TestBed.get(TextbookService);
    expect(service).toBeTruthy();
  });
});
