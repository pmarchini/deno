Deno.test("package b does not observe shared state", () => {
  if (globalThis.sharedValue !== undefined) {
    throw new Error(`unexpected shared value: ${globalThis.sharedValue}`);
  }
});
