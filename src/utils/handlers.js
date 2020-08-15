import { rest } from "msw";

const handlers = [
  rest.post(
    "http://www.mocky.io/v2/5d9d9219310000153650e30b",
    (req, res, ctx) => {
      return res(ctx.json({ result: "success" }));
    }
  ),
];

export default handlers;
