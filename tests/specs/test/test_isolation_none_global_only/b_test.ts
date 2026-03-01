Deno.test("b skipped by only", () => {
  throw new Error("should not run");
});
