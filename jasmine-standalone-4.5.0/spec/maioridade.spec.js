describe("Teste de validação - Maior de Idade", function(){
    
    it("Validação Maior idade", function(){
        expect(maioridade(18)).toBe('Maior de Idade');
    });

});

describe("Teste de validação - Menor de Idade", function(){
    it("Validação Menor Idade", function(){
        expect(maioridade(10)).toBe('Menor de Idade');
    });
});