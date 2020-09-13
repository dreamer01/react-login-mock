// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import { setupServer } from "msw/node";
import MutationObserver from "@sheerun/mutationobserver-shim";
import handlers from "./utils/handlers";

window.MutationObserver = MutationObserver;

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen({
    onUnhandledRequest: "error",
  });
});

afterAll(() => {
  server.close();
});

afterEach(() => {
  server.resetHandlers();
});
