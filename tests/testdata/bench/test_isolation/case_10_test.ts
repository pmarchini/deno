import { sharedValue } from "./shared.ts";

const value = sharedValue(10);

Deno.test("case 10 alpha", () => {
  if (value !== "shared-10") throw new Error("unexpected value");
});

Deno.test("case 10 beta", () => {
  if (!value.startsWith("shared-")) throw new Error("unexpected prefix");
});
