import { getCurrentYear, getFooterCopy, getLatestNotification } from './utils';


describe('utils functions', () => {
  it('getCurrentYear returns the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getCurrentYear()).toBe(currentYear);
  });

  it('getFooterCopy returns "Holberton School" if it s true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  it('getFooterCopy returns "Holberton School main dashboard" if it s false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  it('getLatestNotification returns string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
