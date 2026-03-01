Deno.test("a sees its own origin", (t) => {
  if (!t.origin.endsWith("/a_test.ts")) {
    throw new Error(`unexpected origin: ${t.origin}`);
  }
});
