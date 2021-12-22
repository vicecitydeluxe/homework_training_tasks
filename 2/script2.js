/* Реализовать функцию checkSyntax(string), 
проверяющую на синтаксическую верность последовательность скобок. 
Задача не сводится к простой проверке сбалансированности скобок.
 Нужно еще учитывать их последовательность (вложенность).
 */

 let init = () => {
  console.log("*Task 2*");

  function checkSyntax(str) {
    let brackets = "[]{}()<>",
      stack = [],
      position;

    for (let i = 0; i < str.length; i++) {
      position = brackets.indexOf(str[i]);

      if (position === -1) {
        continue;
      }

      if (position % 2 === 0) {
        stack.push(position + 1);
      } else {
        if (stack.pop() !== position) {
          return 1;
        }
      }
    }

    return stack.length === 0 
    ? 0 
    : 1;
  }

//Tests
  try {
    test(checkSyntax, ["---(++++)----"], 0);
    test(checkSyntax, [""], 0);
    test(checkSyntax, ["before ( middle []) after "], 0);
    test(checkSyntax, [") ("], 1);
    test(checkSyntax, ["} {"], 1);
    test(checkSyntax, ["<(   >)"], 1);
    test(checkSyntax, ["(  [  <>  ()  ]  <>  )"], 0);
    test(checkSyntax, ["   (      [)"], 1);

    console.info("Congrats! All tests passed.");
  } catch (e) {
    console.error(e);
  }

  function test(call, args, count, n) {
    let r = call.apply(n, args) === count;
    console.assert(r, `Finded items count: ${count}`);
    if (!r) throw "Tests failed!";
  }

  console.log("\n");
}

init()
