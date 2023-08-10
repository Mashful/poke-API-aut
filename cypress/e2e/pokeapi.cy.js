it.only('GET API testing Using Cypress API Plugin', () => {

    cy.api({
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon/ditto',
    }).then((res) => {
        expect(res.status).to.eq(200);
    })
})

