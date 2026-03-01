import { sharedValue } from "./shared.ts";

const value = sharedValue(2);

Deno.test("case 02 alpha", () => {
  if (value !== "shared-2") throw new Error("unexpected value");
});

Deno.test("case 02 beta", () => {
  if (!value.startsWith("shared-")) throw new Error("unexpected prefix");
});
