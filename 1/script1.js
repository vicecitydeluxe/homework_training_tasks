/* Задача №1
 Написать функцию dscount, 
 которая подсчитывает количество 
 идущих подряд символов s1 и s2 в строке, без учёта регистра.
  */
"use strict";
let init = () => {
  console.log("* Task 1 *");

  function dscount(str, a, b) {
    let count = 0,
      position = str.toLowerCase().indexOf(a.toLowerCase());
    while (position != -1) {
      position += 1;

      if (position === str.toLowerCase().indexOf(b.toLowerCase(), position))
        count++;

      position = str.toLowerCase().indexOf(a.toLowerCase(), position);
    }
    return count;
  }

  //Tests
  try {
    test(dscount, ["ab___ab__", "a", "b"], 2);
    test(dscount, ["___cd____", "c", "d"], 1);
    test(dscount, ["de_______", "d", "e"], 1);
    test(dscount, ["12_12__12", "1", "2"], 3);
    test(dscount, ["_ba______", "a", "b"], 0);
    test(dscount, ["_a__b____", "a", "b"], 0);
    test(dscount, ["-ab-аb-ab", "a", "b"], 2);
    test(dscount, ["aAa", "a", "a"], 2);

    console.info("Congratulations! All tests success passed.");
  } catch (e) {
    console.error(e);
  }

  function test(call, args, count, n) {
    let r = call.apply(n, args) === count;
    console.assert(r, `Finded items count: ${count}`);
    if (!r) throw "Test failed!";
  }
  console.log("\n");
};

init()
