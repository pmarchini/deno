Deno.test("b sees its own origin", (t) => {
  if (!t.origin.endsWith("/b_test.ts")) {
    throw new Error(`unexpected origin: ${t.origin}`);
  }
});
