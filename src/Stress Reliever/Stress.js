let redValue = 0;
let greenValue = 100;
function changeColor() {
  $("#circle").click(function() {
    $(this).css({
      "background-image": `radial-gradient(circle, red ${redValue}, blue, green ${greenValue}%)`
    });
  });
  redValue += 5;
  greenValue -= 2;
  console.log(`red=(${redValue}) green=(${greenValue}`);
}
// $("#circle").click(function(){
//   $(this).css("background-image", "radial-gradient(circle, red 0, blue, green 100%);")
// })
