window.renderStatistics = function (ctx, names, times) {
	ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
	ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeStyle = "Turquoise";
	ctx.lineWidth = 10;
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000'; 
  ctx.font = '16px PT Mono';
	ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;

  for (var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  };

  var histogramHeight = 150;             
  var barWidth = 50; 
  var indent = barWidth + 40;
  var initialY = 80;
  var initialTextX = 140; 
  var initialTextY = 250; 
  var playerHeight = histogramHeight / (max - 0);

	for(var i = 0; i < times.length; i++) {

		chooseColor(i, names, times, ctx);
		ctx.fillRect(initialTextX + indent * i, initialY + (histogramHeight - times[i] * playerHeight), barWidth, times[i] * playerHeight);
		ctx.fillText(names[i], initialTextX + indent * i, initialTextY);
	}
};

function chooseColor (i, names, results, ctx) { 

  if (names[i] == "Вы") {
  	ctx.fillStyle = "rgba(255, 0, 0, 1)";
	} else {
		ctx.fillStyle = "#00" + (Math.random() * 100).toFixed(0) + "FF";	
	}
};
  

//ВТОРОЙ СПОСОБ - ЧЕРЕЗ ПОДКЛЮЧЕННЫЙ ФАЙЛ 

// var colors = randomColor({hue: 'blue', count: 3});

// 	for(var i = 0; i < times.length; i++) {

// 		chooseColor(i, names, times, ctx, colors)
// 		ctx.fillRect(initialTextX + indent * i, initialY + (histogramHeight - times[i] * playerHeight), barWidth, times[i] * playerHeight);
// 		ctx.fillText(names[i], initialTextX + indent * i, initialTextY);
// 	}
// };

// function chooseColor (i, names, results, ctx, colors) { 

//   if (names[i] == "Вы") {
//   	ctx.fillStyle = "rgba(255, 0, 0, 1)";
// 	} else {
// 		ctx.fillStyle = colors[i];	
// 	}
// };





