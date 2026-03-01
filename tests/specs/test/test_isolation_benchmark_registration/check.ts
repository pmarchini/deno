const repoRoot = new URL("../../../../", import.meta.url);
const benchMainPath = new URL("tests/bench/main.rs", repoRoot);
const fixtureDir = new URL("tests/testdata/bench/test_isolation/", repoRoot);

const benchMain = await Deno.readTextFile(benchMainPath);

for (const name of ["test_isolation_module", "test_isolation_none"]) {
  if (!benchMain.includes(`"${name}"`)) {
    throw new Error(`missing benchmark entry: ${name}`);
  }
}

const fixtureEntries = [];
for await (const entry of Deno.readDir(fixtureDir)) {
  fixtureEntries.push(entry);
}

const testFiles = fixtureEntries.filter((entry) =>
  entry.isFile && entry.name.endsWith("_test.ts")
);

if (!fixtureEntries.some((entry) => entry.isFile && entry.name === "shared.ts")) {
  throw new Error("missing shared helper fixture");
}

if (testFiles.length < 10) {
  throw new Error(`expected at least 10 test modules, found ${testFiles.length}`);
}

console.log("ok");
