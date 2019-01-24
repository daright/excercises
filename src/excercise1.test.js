import { is_palindrome } from './excercise1';

describe('is_palindrome(candidate)', () => {
    it('should return true for empty string', () => {
        expect(is_palindrome('')).toBe(true);
    });
    it('should return true for "a"', () => {
        expect(is_palindrome('a')).toBe(true);
    });
    it('should return true for "abccba"', () => {
        expect(is_palindrome('abccba')).toBe(true);
    });
    it('should return true for "abcdcba"', () => {
        expect(is_palindrome('abcdcba')).toBe(true);
    });
    it('should return true for "live on time emit no evil"', () => {
        expect(is_palindrome('live on time emit no evil')).toBe(true);
    });
    it('should return true for "live on time emit no evil"', () => {
        expect(is_palindrome('live on time emit no evil')).toBe(true);
    });
    it('should return false for "A man, a plan, a canal – Panama"', () => {
        expect(is_palindrome('A man, a plan, a canal – Panama')).toBe(true);
    });
    it('should return true for 123321', () => {
        expect(is_palindrome(123321)).toBe(true);
    });
    it('should return false for null', () => {
        expect(is_palindrome(null)).toBe(false);
    });
    it('should return false for undefined', () => {
        expect(is_palindrome(undefined)).toBe(false);
    });
    it('should return false for {}', () => {
        expect(is_palindrome({})).toBe(false);
    });
    it('should return true for [], because empty arrays are converted to empty string', () => {
        expect(is_palindrome([])).toBe(true);
    });
    it('should return true for [1,2,3,2,1], because empty arrays are converted to "1,2,3,2,1" string', () => {
        expect(is_palindrome([1, 2, 3, 2, 1])).toBe(true);
    });
});
