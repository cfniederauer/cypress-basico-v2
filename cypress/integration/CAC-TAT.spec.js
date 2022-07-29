/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(function() {
        cy.visit('./src/index.html')
    })
    it('Verify title', function(){
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    it.only('Preencher formulario', function() {
        const longText = 'Eu nao preciso de ajuda!, Eu nao preciso de ajuda!,Eu nao preciso de ajuda!,Eu nao preciso de ajuda!,Eu nao preciso de ajuda!,Eu nao preciso de ajuda!,Eu nao preciso de ajuda!,Eu nao preciso de ajuda!'

        cy.get('#firstName').should('be.visible').type('Caio').should('have.value', 'Caio')
        cy.get('#lastName').should('be.visible').type('Niederauer').should('have.value', 'Niederauer')
        cy.get('#email').should('be.visible').type('caio@test.com').should('have.value', 'caio@test.com')
        cy.get('#open-text-area').should('be.visible').type(longText, {delay: 0}).should('have.value', longText)
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')
        
    })
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        const longText = 'Eu nao preciso de ajuda!, Eu nao preciso de ajuda!,Eu nao preciso de ajuda!,Eu nao preciso de ajuda!,Eu nao preciso de ajuda!,Eu nao preciso de ajuda!,Eu nao preciso de ajuda!,Eu nao preciso de ajuda!'

        cy.get('#firstName').should('be.visible').type('Caio').should('have.value', 'Caio')
        cy.get('#lastName').should('be.visible').type('Niederauer').should('have.value', 'Niederauer')
        cy.get('#email').should('be.visible').type('caiotest.com')
        cy.get('#open-text-area').should('be.visible').type(longText, {delay: 0}).should('have.value', longText)
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

    it('campo telefone só aceita números', function() {
        cy.get('#phone').should('be.visible').type('Niederauer').should('have.value', '')
    })

    it.only('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){

        const longText = 'Eu nao preciso de ajuda!, Eu nao preciso de ajuda!,Eu nao preciso de ajuda!,Eu nao preciso de ajuda!,Eu nao preciso de ajuda!,Eu nao preciso de ajuda!,Eu nao preciso de ajuda!,Eu nao preciso de ajuda!'

        cy.get('#firstName').should('be.visible').type('Caio').should('have.value', 'Caio')
        cy.get('#lastName').should('be.visible').type('Niederauer').should('have.value', 'Niederauer')
        cy.get('#email').should('be.visible').type('caio@test.com').should('have.value', 'caio@test.com')
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').should('be.visible').type(longText, {delay: 0}).should('have.value', longText)
        cy.get('button[type="submit"]').click()
    })
    it('preenche e limpa os campos', function(){
        cy.get('#firstName').type('Caio').should('have.value', 'Caio')
        cy.get('#firstName').clear().should('have.value', '')
    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')

    })

    it('envia o formuário com sucesso usando um comando customizado', function(){
        cy.fillMandatoryFieldsAndSubmit('Caio', 'Niederauer', 'caio@gmail.com')
        cy.get('.success').should('be.visible')
    })


})