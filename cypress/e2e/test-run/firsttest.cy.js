/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit('https://csgoroll-www-master-h7r4kpopga-uc.a.run.app/dice', {
            auth: {
                username: 'ancient',
                password: 'things',
            }
        });
    })

    it('tryout test case', () => {
        
    })
})