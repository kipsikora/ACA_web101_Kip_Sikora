let redValue = 50;
let blueValue = 100;
let purpleValue = 1;
// function changeColor() {
//   $("#circle").click(function() {
//     $(this).css({
//       "background-image": `radial-gradient(circle, red ${redValue}, blue, green ${greenValue}%)`
//     });
//   });

function changeColor() {
  $("#circle2").click(function() {
    $(this).css({
      "background-image": `radial-gradient(circle, red ${redValue}%, blue ${blueValue}%, purple ${purpleValue}%)`
    });
    $("audio#sound")[0].play();
  });

  redValue -= 0.5;
  blueValue -= 0.5;
  purpleValue += 0.5;
  // console.log(`red=(${redValue}) green=(${greenValue})`);
  console.log(` red=(${redValue}) blue=(${blueValue}) purple=(${purpleValue})`);
}
// $("#circle").click(function(){
//   $(this).css("background-image", "radial-gradient(circle, red 0, blue, green 100%);")
// })
