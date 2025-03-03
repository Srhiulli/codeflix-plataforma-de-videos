import { ValueObject } from "../value-object";

class StringValueObject extends ValueObject {
    constructor(readonly value: string) {
        super();
    }
}

describe('Value Object Unit Test', () => { 
    test('equals method should return true if two value objects are equal', () => {
        const vo1 = new StringValueObject('test');
        const vo2 = new StringValueObject('test');
        expect(vo1.equals(vo2)).toBeTruthy();
    });

    test('equals method should return false if two value objects are not equal', () => {
        const vo1 = new StringValueObject('test');
        const vo2 = new StringValueObject('test2');
        expect(vo1.equals(vo2)).toBeFalsy();
    });

    test('equals method should return false if comparing with null', () => {
        const vo1 = new StringValueObject('test');
        expect(vo1.equals(null as any)).toBeFalsy();
    });

    test('equals method should return false if comparing with undefined', () => {
        const vo1 = new StringValueObject('test');
        expect(vo1.equals(undefined as any)).toBeFalsy();
    });

    test('equals method should return false if comparing with different value object', () => {
        const vo1 = new StringValueObject('test');
        const vo2 = new ValueObject();
        expect(vo1.equals(vo2)).toBeFalsy();
    });

})