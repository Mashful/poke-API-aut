it.only('GET API testing Using Cypress API Plugin', () => {

    cy.api({
        method: 'GET',
        url: 'pokemon/ditto',
    }).then((res) => {
        expect(res.status).to.eq(200);
    });
});

