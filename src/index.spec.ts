import { SERVICE_NAME } from './index';

describe('conformance-nextjs-v2', () => {
  it('should export SERVICE_NAME', () => {
    expect(SERVICE_NAME).toBe('conformance-nextjs-v2');
  });
});
