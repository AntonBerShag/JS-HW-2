// Задача 1
var array = ['Hello', 'Oranges', 'Age'];
var length = array[0].length;
var result = "";

alert(`Задача №1\nИсходный массив: ${array}`);

for(var i in array) {
    if(array[i].length > length){
        length = array[i].length;
        result = array[i];
    }
}

alert(`Самое длинное слово в массиве: ${result}`);

array.length = 0;
for(var el of result) {
    array.push('\'' + el + '\'');
}
alert(`Итоговый результат: ${array}`);

// Задача 2
var text = prompt('Задача №2.\nВведите текст:');
var fontColor = prompt('Введите цвет текста:');
var fontSize = +prompt('Введите размер шрифта:');

marker(text, fontColor, fontSize);

function marker(text, color, size) {
    document.write (
        `<p style="font-family: Comic Sans MS; font-size: 30">Задача №2.\n</p>` +
        `<p style="font-family: Comic Sans MS; color:${color};
        font-size: ${size}px;">${text}</p>`
    )
};

// Задача 3
var arrayImg = [];
arrayImg = ['images/bee.jpg', 'images/sunflower.jpg'];
while(true){
    if(confirm('Добавить изображение?')){
        arrayImg.push(prompt('Введите путь:'));
    }
    else
    break;
}
placeImages(arrayImg);

function placeImages(imagesArray) {
    for(var el of imagesArray) {
        box.innerHTML+=
        `<div class ="newDiv"><img src="${el}"></div>`
    }
}