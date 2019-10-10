$(document).ready(function () {
    $(".tabs li").click(function () { // вешаем обработчик события в виде анонимной функции на все элементы с кл
        $(".tabs li").removeClass("active"); // удаляем у всех элементов с этим классом клас active
        $(this).addClass("active"); // добавляем его текущему элементу
        $(".tabs-content li").hide();//удаляем эктив у всех нижних li
        let x = $(this).data("target"); //находим дата таргет у активнего верхнего
        console.log(x);
        $(`#${x}`).show(); //находим нижнего по ид равного дататаргету верхнего       
    });
})

