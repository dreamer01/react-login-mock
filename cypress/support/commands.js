Cypress.Commands.add("login", (user) => {
  return cy
    .request({
      url: "http://www.mocky.io/v2/5d9d9219310000153650e30b",
      method: "POST",
      body: user,
    })
    .then(({ body }) => {
      window.localStorage.setItem(
        "@test:auth",
        JSON.stringify({ isLogged: true })
      );
      return body.user;
    });
});
