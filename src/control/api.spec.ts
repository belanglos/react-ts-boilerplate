import getSomething from './api';

describe('api', () => {
    it('getSomething', () => {
        expect(getSomething()).toStrictEqual('Hello World!');
    });
});
