Deno.test("b observes shared state", () => {
  if (globalThis.sharedValue !== "from-a") {
    throw new Error(`unexpected shared value: ${globalThis.sharedValue}`);
  }
});
