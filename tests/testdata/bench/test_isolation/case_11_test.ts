import { sharedValue } from "./shared.ts";

const value = sharedValue(11);

Deno.test("case 11 alpha", () => {
  if (value !== "shared-11") throw new Error("unexpected value");
});

Deno.test("case 11 beta", () => {
  if (!value.startsWith("shared-")) throw new Error("unexpected prefix");
});
