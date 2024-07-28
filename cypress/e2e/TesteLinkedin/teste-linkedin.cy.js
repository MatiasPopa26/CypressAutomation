describe("Suita Linkedin.com", () => {

    it('I can log in', () => {
        cy.once('uncaught:exception', () => false);
        cy.visit('https://linkedin.com');
        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('email');
        cy.get('#password').type('pass');
        cy.get('.btn__primary--large').click();

        cy.get('#ember152 > .t-16').should('exist');

    })

})