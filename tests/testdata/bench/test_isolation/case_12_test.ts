import { sharedValue } from "./shared.ts";

const value = sharedValue(12);

Deno.test("case 12 alpha", () => {
  if (value !== "shared-12") throw new Error("unexpected value");
});

Deno.test("case 12 beta", () => {
  if (!value.startsWith("shared-")) throw new Error("unexpected prefix");
});
