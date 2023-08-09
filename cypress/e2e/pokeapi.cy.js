it("GET API testing Using Cypress API Plugin", () => {
  cy.api("GET", "https://pokeapi.co/api/v2/pokemon/ditto").should((response) => {
    expect(response.status).to.eq(200);
});
})