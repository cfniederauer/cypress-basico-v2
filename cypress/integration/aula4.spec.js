/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(function() {
        cy.visit('./src/index.html')
    })
    it('marca o tipo de atendimento "Feedback"', ()=>{
        cy.get('input[type="radio"][value="feedback"]').check().should('have.value', 'feedback')
    })
    it('marca cada tipo de atendimento', ()=>{
        cy.get('input[type="radio"]').should('have.length', 3)
        .each(function($radio){
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
        })
        
    })
})
