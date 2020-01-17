var fortunes = [
  "Победи свои страхи или они победят тебя.",
  "Рекам нужны истоки.",
  "Не бойся не неведомого.",
  "Тебя ждет приятный сюрприз.",
  "Будь проще везеде, где только можно."
];

exports.getFortune = function(){
  var idx = Math.floor(Math.random() * fortunes.length);
  return fortunes[idx];
};
