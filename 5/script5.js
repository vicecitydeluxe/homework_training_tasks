let init = () => {
  console.log("*Task 5*");

  function newDrawRating(vote) {
    let point = vote != 0 ? Math.ceil(vote / 20) : 1;
    return Array(point + 1).join("★") + Array(6 - point).join("☆");
  }

  // Tests
  console.log(newDrawRating(0)); // ★☆☆☆☆
  console.log(newDrawRating(1)); // ★☆☆☆☆
  console.log(newDrawRating(21)); // ★★☆☆☆
  console.log(newDrawRating(41)); // ★★★☆☆
  console.log(newDrawRating(50)); // ★★★☆☆
  console.log(newDrawRating(80)); // ★★★★☆
  console.log(newDrawRating(99)); // ★★★★★
};

init();
