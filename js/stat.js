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
	ctx.fillRect(initialTextX + indent * i, initialY + (histogramHeight - times[i] * playerHeight), barWidth, times[i] * playerHeight);
	ctx.fillText(names[i], initialTextX + indent * i, initialTextY);
	};

};


//ПЕРВЫЙ ВАРИАНТ ПРИСВАИВАНИЯ ЦВЕТОВ - НЕ РАБОТАЕТ
//   function chooseColor (names) { 
//   	var i = 0;

//   if (names[i] = "Вы") {
//   	ctx.fillStyle = "rgba(255, 0, 0, 1)";
//   	//получается что отрисовываются ВСЕ гистограммы
//   	i++;
//   } else if (names[i] = "Катя"){
//   	ctx.fillStyle = "#2D6E9F";
//   i++;
//   } else if (names[i] = "Кекс") {
// ctx.fillStyle = "#2D4B9F";
// i++;
//   } else {
// ctx.fillStyle = "#04174E";
//   }

//   };
  
//   chooseColor;


//ВТОРОЙ ВАРИАНТ ПРИСВАИВАНИЯ ЦВЕТОВ - НЕ РАБОТАЕТ

// 	var i = 0;
// 		if (names[i] = "Вы") {
// 	ctx.fillStyle = "rgba(255, 0, 0, 1)";
//   ctx.fillRect(initialTextX + indent * i, initialY + (histogramHeight - times[i] * playerHeight), barWidth, times[i] * playerHeight);
//   ctx.fillText(names[i], initialTextX + indent * i, initialTextY);
//   i++;
// } else if (names[i] = "Кекс") {
// 	ctx.fillStyle = "#2D4B9F";
// 	ctx.fillRect(initialTextX + indent * i, initialY + (histogramHeight - times[i] * playerHeight), barWidth, times[i] * playerHeight);
//   ctx.fillText(names[i], initialTextX + indent * i, initialTextY);
//   i++;
// };
  

	//ЦВЕТА ДЛЯ СТОЛБИКОВ
	// ctx.fillStyle = "#2D6E9F";
	// ctx.fillStyle = "#2D4B9F";
	// ctx.fillStyle = "#04174E";
	



