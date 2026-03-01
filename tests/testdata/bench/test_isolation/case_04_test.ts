import { sharedValue } from "./shared.ts";

const value = sharedValue(4);

Deno.test("case 04 alpha", () => {
  if (value !== "shared-4") throw new Error("unexpected value");
});

Deno.test("case 04 beta", () => {
  if (!value.startsWith("shared-")) throw new Error("unexpected prefix");
});
