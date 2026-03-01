const logs: string[] = globalThis.logs ??= [];

Deno.test.beforeAll(() => {
  logs.push("beforeAll a1");
});

Deno.test.beforeAll(() => {
  logs.push("beforeAll a2");
});

Deno.test.beforeEach(() => {
  logs.push("beforeEach a1");
});

Deno.test.beforeEach(() => {
  logs.push("beforeEach a2");
});

Deno.test.afterEach(() => {
  logs.push("afterEach a1");
});

Deno.test.afterEach(() => {
  logs.push("afterEach a2");
});

Deno.test.afterAll(() => {
  logs.push("afterAll a1");
});

Deno.test.afterAll(() => {
  logs.push("afterAll a2");
});

Deno.test("test a", () => {
  logs.push("test a");
});

globalThis.onunload = () => {
  console.log(logs);
};
