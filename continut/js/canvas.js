function drawRectangle() {
  var canvas = document.getElementById("myCanvas");
  var border_color = document.getElementById("culoareContur").value;
  var fill_color = document.getElementById("culoareUmplere").value;
  
    // Get the canvas context and set the border and fill colors
  var ctx = canvas.getContext("2d");
  ctx.strokeStyle = border_color;
  ctx.fillStyle = fill_color;

  // Define variables to keep track of the starting and ending positions
  var startPos = null;
  var endPos = null;

  // Add a mousedown event listener to the canvas
  canvas.addEventListener("mousedown", function(event) {
    // Get the position of the mouse click
    var x = event.offsetX;
    var y = event.offsetY;

    // Save the starting position
    startPos = {x: x, y: y};

    // Add a mouseup event listener to the canvas
    canvas.addEventListener("mouseup", function(event) {
      // Get the position of the mouse release
      var x = event.offsetX;
      var y = event.offsetY;

      // Save the ending position
      endPos = {x: x, y: y};

      // Calculate the width and height of the rectangle
      var width = Math.abs(endPos.x - startPos.x);
      var height = Math.abs(endPos.y - startPos.y);

      // Set the starting point of the rectangle
      var rectX = Math.min(startPos.x, endPos.x);
      var rectY = Math.min(startPos.y, endPos.y);

      // Draw the rectangle using the start position, width, and height
      ctx.fillRect(rectX, rectY, width, height);
      ctx.strokeRect(rectX, rectY, width, height);

      // Reset the starting and ending positions
      startPos = null;
      endPos = null;

      // Remove the mouseup event listener
      canvas.removeEventListener("mouseup", arguments.callee);
    });
  });
}