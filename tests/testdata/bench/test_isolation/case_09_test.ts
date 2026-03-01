import { sharedValue } from "./shared.ts";

const value = sharedValue(9);

Deno.test("case 09 alpha", () => {
  if (value !== "shared-9") throw new Error("unexpected value");
});

Deno.test("case 09 beta", () => {
  if (!value.startsWith("shared-")) throw new Error("unexpected prefix");
});
