import { InvalidUuidError, Uuid } from "../uuid.vo";
import { v4 as uuidv4, validate as uuidValidate } from 'uuid';
const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate');
 
//spy do Jest que monitora as chamadas da função validate dentro da classe Uuid.
//Isso garante que a função validate realmente foi executada durante a criação ou validação do UUID
describe('Uuid Unit Tests', () => {

    test('should throw a new error when uuid is invalid', () => {
        expect(() => {
            new Uuid('invalid-uuid')
        }).toThrowError(new InvalidUuidError())
        expect(validateSpy).toHaveBeenCalledTimes(1);
    })

    test('should create a new uuid when id is not provided', () => {
        const uuid = new Uuid();
        expect(uuid.id).toBeDefined();
        expect(uuidValidate(uuid.id)).toBeTruthy();
        expect(validateSpy).toHaveBeenCalledTimes(1);

    })
    test('shoul accept a valid uuid', () => { 
        const uuid = new Uuid('b1f7a5c0-7a6d-4c7f-8e6c-3f5d8b4b1f7a');
        expect(uuid.id).toBe('b1f7a5c0-7a6d-4c7f-8e6c-3f5d8b4b1f7a');
    })
})