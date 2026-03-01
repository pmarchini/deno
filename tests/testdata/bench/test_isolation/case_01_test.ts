import { sharedValue } from "./shared.ts";

const value = sharedValue(1);

Deno.test("case 01 alpha", () => {
  if (value !== "shared-1") throw new Error("unexpected value");
});

Deno.test("case 01 beta", () => {
  if (!value.startsWith("shared-")) throw new Error("unexpected prefix");
});
