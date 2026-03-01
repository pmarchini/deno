import { sharedValue } from "./shared.ts";

const value = sharedValue(5);

Deno.test("case 05 alpha", () => {
  if (value !== "shared-5") throw new Error("unexpected value");
});

Deno.test("case 05 beta", () => {
  if (!value.startsWith("shared-")) throw new Error("unexpected prefix");
});
