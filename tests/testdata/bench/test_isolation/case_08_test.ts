import { sharedValue } from "./shared.ts";

const value = sharedValue(8);

Deno.test("case 08 alpha", () => {
  if (value !== "shared-8") throw new Error("unexpected value");
});

Deno.test("case 08 beta", () => {
  if (!value.startsWith("shared-")) throw new Error("unexpected prefix");
});
