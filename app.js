
function gridSize(){
  var x = prompt("How big would you like the grid?");
  gridStart(x);
}

function gridStart(gridChoice){
  for (var rows = 0; rows < gridChoice; rows++){
    for (var columns = 0; columns < gridChoice; columns++){
      $(".gridWrp").append("<div class='grid'></div>");
    }
  }
  $(".grid").width(960/gridChoice);
  $(".grid").height(960/gridChoice);
}

function clearGrid(){
  $(".grid").css("background-color", "white");
}

gridStart(16);

function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random()* 16)]
  }
  return color;
}

function colorBlack() {
  $(".grid").mouseover(function(){
    $(this).css("background-color", "black");
  });
}

function colorRainbow(){
  $(".grid").mouseover(function(){
    $(this).css("background-color", getRandomColor());
  });
}
var test = document.getElementsByClassName('grid');

// function colorPencil(){
//   $(".grid").mouseover(function(){
//     setColorPencil();
//   })
// }


function pencilColor() {
  $(".grid").css("background-color", "black");
  $(".grid").css("opacity", "0");
  $(".grid").mouseover(function(){
    this.style.opacity = Number(this.style.opacity) + 0.1;
  });
};
