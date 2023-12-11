
// Скрипт для отображения и скрытия перекрывающего объекта
document.addEventListener('DOMContentLoaded', function () {
    // Показать перекрывающий объект
    document.getElementById('overlay').style.display = 'block';

    // Скрыть через 1 секунду (1000 миллисекунд)
    setTimeout(function () {
        document.getElementById('overlay').style.display = 'none';
    }, 1000);
});