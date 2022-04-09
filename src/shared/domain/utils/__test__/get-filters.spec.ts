import { createFilter } from '../create-filters';

describe('createFilter', () => {

  it('should create the correct amount of filters', () => {
    const filter = {
      name: 'name',
      user: 'user',
      option: 'option'
    }

    const filters = createFilter(filter);
    expect(filters.length).toBe(Object.keys(filter).length);
  });
});
