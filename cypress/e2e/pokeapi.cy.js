it.only('Users should be able to get providers ', () => {

    cy.api({
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon/ditto',
    }).then((res) => {
        expect(res.status).to.eq(200);
    })
})

