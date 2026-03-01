const logs: string[] = globalThis.logs ??= [];

Deno.test.beforeAll(() => {
  logs.push("beforeAll b1");
});

Deno.test.beforeAll(() => {
  logs.push("beforeAll b2");
});

Deno.test.beforeEach(() => {
  logs.push("beforeEach b1");
});

Deno.test.beforeEach(() => {
  logs.push("beforeEach b2");
});

Deno.test.afterEach(() => {
  logs.push("afterEach b1");
});

Deno.test.afterEach(() => {
  logs.push("afterEach b2");
});

Deno.test.afterAll(() => {
  logs.push("afterAll b1");
});

Deno.test.afterAll(() => {
  logs.push("afterAll b2");
});

Deno.test("test b", () => {
  logs.push("test b");
});
