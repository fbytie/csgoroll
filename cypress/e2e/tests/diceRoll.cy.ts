/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit('https://ancient:things@csgoroll-www-master-h7r4kpopga-uc.a.run.app/dice');
    })

    it('increase bet amount by 1', () => {

        let initialBetValue;

        cy.get('#mat-input-4').then(($bet) => {
            initialBetValue = $bet.val();
            cy.get('button[data-test="plus-1"]').trigger('click').then(() => {
                cy.get('#mat-input-4').should('have.value', +initialBetValue + 1);
            })
        })
    })

    it('increase bet amount by 10', () => {

        let initialBetValue;

        cy.get('#mat-input-4').then(($bet) => {
            initialBetValue = $bet.val();
            cy.get('button[data-test="plus-10"]').trigger('click').then(() => {
                cy.get('#mat-input-4').should('have.value', +initialBetValue + 10);
            })
        })
    })

    it('half the bet amount', () => {

        let initialBetValue;

        cy.get('#mat-input-4').then(($bet) => {
            initialBetValue = $bet.val();
            cy.get('button[data-test="1-div-2"]').trigger('click').then(() => {
                cy.get('#mat-input-4').should('have.value', +initialBetValue / 2);
            })
        })
    })

    it('double the bet amount', () => {

        let initialBetValue;

        cy.get('#mat-input-4').then(($bet) => {
            initialBetValue = $bet.val();
            cy.get('button[data-test="x2"]').trigger('click').then(() => {
                cy.get('#mat-input-4').should('have.value', +initialBetValue * 2);
            })
        })
    })

    it('clear the bet amount', () => {

        cy.get('#mat-input-4').then(() => {
            cy.get('button[data-test="clear"]').trigger('click').then(() => {
                cy.get('#mat-input-4').should('have.value', '');
            })
        })
    })
})