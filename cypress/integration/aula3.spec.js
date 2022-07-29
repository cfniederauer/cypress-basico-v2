/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(function() {
        cy.visit('./src/index.html')
    })
    it('seleciona um produto (YouTube) por seu texto',() =>{
        cy.get('#product').select('YouTube').should('have.value', 'youtube')
    })
    it('seleciona um produto (Mentoria) por seu valor (value)', ()=>{
        cy.get('#product').select('mentoria').should('have.value', 'mentoriaa')
    })
    it('seleciona um produto (Blog) por seu índice', ()=>{
        cy.get('#product').select(1).should('have.value', 'blog')
    })

})