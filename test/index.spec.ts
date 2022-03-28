import { diff, sum, message } from "../src/index";
import assert from "assert";
import hello from "api/hello"

describe('Index tests', function() {
    it('2 + 2 should return 4', function() {
        assert.equal(sum(2, 2), 4);
    });
    it('3 - 2 should return 1', function() {
        assert.equal(diff(3, 2), 1);
    });
    it('message should return hello', function() {
        assert.equal(message('hello'), 'hello');
    });
    it('hello should return ciao', function() {
        assert.equal(hello('ciao'), 'ciao');
    });
})
