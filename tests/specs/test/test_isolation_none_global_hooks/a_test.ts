const events = globalThis.hookEvents ??= [];

Deno.test.beforeAll(() => {
  events.push("beforeAll");
});

Deno.test.beforeEach(() => {
  events.push("beforeEach");
});

Deno.test.afterEach(() => {
  events.push("afterEach");
});

Deno.test.afterAll(() => {
  events.push("afterAll");
});

Deno.test("a observes hook order", () => {
  events.push("test:a");
});
