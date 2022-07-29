/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(function() {
        cy.visit('./src/index.html')
    })
    it('marca ambos checkboxes, depois desmarca o último', ()=>{
        cy.get('input[type="checkbox"]')
        .check().should('be.checked')
        .last()
        .uncheck()
        .should('not.be.checked')
        
        })
        
    })