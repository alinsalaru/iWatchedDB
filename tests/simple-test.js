import expect from 'expect';
import deepFreeze from 'deep-freeze';

describe("A simple test", function() {
    it("checks to see if null doesn't exists", function() {
        expect(null).toNotExist();
    });
    
    it("checks to see if deepfreeze works properly", function() {
       function tryFreeze(){
            deepFreeze(Buffer);
            Buffer.x = 5;
       }

       expect(tryFreeze).toThrow(/extensible/g);
       
    });
});