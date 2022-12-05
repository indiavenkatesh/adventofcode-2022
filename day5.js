var fs = require("fs");

try {
  const texts = fs.readFileSync("./data/day5.txt", "utf8").toString().split("\n");

  const stacks = [
    ["F", "G", "V", "R", "J", "L", "D"],
    ["S", "J", "H", "V", "B", "M", "P", "T"],
    ["C", "P", "G", "D", "F", "M", "H", "V"],
    ["Q", "G", "N", "P", "D", "M"],
    ["F", "N", "H", "L", "J"],
    ["Z", "T", "G", "D", "Q", "V", "F", "N"],
    ["L", "B", "D", "F"],
    ["N", "D", "V", "S", "B", "J", "M"],
    ["D", "L", "G"],
  ];

  const partOneStacks = texts.reduce((a, c) => {
    const text = c.trim();

    if (text === "") {
      return a;
    }

    const [_, count, __, sp, ___, ep] = text.split(" ");

    const moveItems = a[+sp - 1].slice(0, count).reverse();

    a[+sp - 1] = a[sp - 1].slice(count);
    a[+ep - 1] = [...moveItems, ...a[+ep - 1]];

    return a;
  }, [...stacks]);

  console.log("partOneStacks:", partOneStacks.reduce((a, c) => a + c[0], ""));

  const partTwoStacks = texts.reduce((a, c) => {
    const text = c.trim();

    if (text === "") {
      return a;
    }

    const [_, count, __, sp, ___, ep] = text.split(" ");

    const moveItems = a[+sp - 1].slice(0, count);

    a[+sp - 1] = a[sp - 1].slice(count);
    a[+ep - 1] = [...moveItems, ...a[+ep - 1]];

    return a;
  }, [...stacks]);

  console.log("partTwoStacks:", partTwoStacks.reduce((a, c) => a + c[0], ""));
} catch (e) {
  console.log("Error:", e.stack);
}
