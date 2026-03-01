const events = globalThis.hookEvents ??= [];

Deno.test("b observes hook order", () => {
  events.push("test:b");

  const expected = [
    "beforeAll",
    "beforeEach",
    "test:a",
    "afterEach",
    "beforeEach",
    "test:b",
  ];

  const actual = events.slice(0, expected.length);
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(`unexpected hook order: ${JSON.stringify(actual)}`);
  }
});
