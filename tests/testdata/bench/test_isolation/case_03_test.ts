import { sharedValue } from "./shared.ts";

const value = sharedValue(3);

Deno.test("case 03 alpha", () => {
  if (value !== "shared-3") throw new Error("unexpected value");
});

Deno.test("case 03 beta", () => {
  if (!value.startsWith("shared-")) throw new Error("unexpected prefix");
});
