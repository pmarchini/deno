import { sharedValue } from "./shared.ts";

const value = sharedValue(6);

Deno.test("case 06 alpha", () => {
  if (value !== "shared-6") throw new Error("unexpected value");
});

Deno.test("case 06 beta", () => {
  if (!value.startsWith("shared-")) throw new Error("unexpected prefix");
});
