import { sharedValue } from "./shared.ts";

const value = sharedValue(7);

Deno.test("case 07 alpha", () => {
  if (value !== "shared-7") throw new Error("unexpected value");
});

Deno.test("case 07 beta", () => {
  if (!value.startsWith("shared-")) throw new Error("unexpected prefix");
});
