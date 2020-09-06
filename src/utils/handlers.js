import { rest } from "msw";

const handlers = [
  rest.post(
    "http://www.mocky.io/v2/5d9d9219310000153650e30b",
    (req, res, ctx) => {
      return res(ctx.json({ result: "success" }));
    }
  ),
  rest.get(
    "https://jsonplaceholder.typicode.com/users?id=1",
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {
              street: "Kulas Light",
              suite: "Apt. 556",
              city: "Gwenborough",
              zipcode: "92998-3874",
              geo: {
                lat: "-37.3159",
                lng: "81.1496",
              },
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company: {
              name: "Romaguera-Crona",
              catchPhrase: "Multi-layered client-server neural-net",
              bs: "harness real-time e-markets",
            },
          },
        ])
      );
    }
  ),
];

export default handlers;
