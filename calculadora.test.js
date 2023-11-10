const { somar } = require('./calculadora');

describe('Teste da função somar', () => {
     test('deveria somar dois numeros inteiros positivos ', () => {
        expect(somar(2,3)).toBe(5);
        // expect(somar(-1,-1)).toBe(-2);
        // expect(somar(2.3,2.25)).toBe(4.75);
        expect(somar(10,0)).toBe(10);
    })

    test('deveriua somar dois numeros inteiros negativos ', () => {
        expect(somar(-1,-1)).toBe(-2);
    })

});

