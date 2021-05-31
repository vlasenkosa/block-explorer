import { isArrayWithItems, expandPath } from '../common-utils';

describe('common', () => {
    describe('isArrayWithItems', () => {
        it.each([
            [true, ['Иванов', 'Иван', 'Иванович']],
            [true, ['Иванов', 'Иван', '']],
            [false, []],
            [false, 'not array'],
            [false, 1234],
            [false, null],
            [false, undefined],
        ])('should return "%s" when testArray: "%s"', (expected, testArray) => {
            const result = isArrayWithItems(testArray);
            expect(result).toEqual(expected);
        });
    });

    describe('expand-path', () => {
        it('Should return same path if either params nor query was provided', () => {
            expect(expandPath('test-path')).toBe('test-path');
        });

        it('Should work with string query', () => {
            expect(expandPath('api/test-path', { query: 'foo=bar' })).toBe('api/test-path?foo=bar');
        });

        it('Should accept queries with question mark', () => {
            expect(expandPath('api/test-path', { query: '?foo=bar' })).toBe('api/test-path?foo=bar');
        });

        it('Should work with object queries', () => {
            expect(expandPath('api/test-path', { query: { foo: 'bar' }})).toBe('api/test-path?foo=bar');
        });

        it('Should work with object queries with arrays', () => {
            expect(expandPath('api/test-path', { query: { foo: ['bar', 'baz'] }}))
                .toBe('api/test-path?foo=bar&foo=baz');
        });

        it('Should expand dynamic variables', () => {
            expect(expandPath('api/test-path/{id}', { params: { id: 'foo'}}))
                .toBe('api/test-path/foo');
        });

        it('Should accept not-required path variables', () => {
            expect(expandPath('api/test-path/{id?}', { params: { id: 'foo' } })).toBe('api/test-path/foo')
        });

        it('Should work with both complex params and query', () => {
            expect(expandPath(
                'api/test-path/{id}/users/{userId?}',
                { params: { id: 'foo', userId: 'bar' }, query: { age: 10, group: ['baz', 'xyz']} }
            )).toBe('api/test-path/foo/users/bar?age=10&group=baz&group=xyz');
        })
    })
});
