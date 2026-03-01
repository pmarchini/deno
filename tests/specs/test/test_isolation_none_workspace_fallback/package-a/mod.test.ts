Deno.test("package a sets shared state", () => {
  globalThis.sharedValue = "set by a";
});
