let fruits = [
    'orange',
    'apple',
    'plum',
    'peach',
]

function fruitsList(fruits) {
    let li = fruits.map(function (fruit) {
        return `<li>${fruit}</li>`;
    });
    let liHtml = li.join("");
    let ulHtml = `<ul>${liHtml}</ul>`;
    document.body.insertAdjacentHTML('beforeEnd', ulHtml);
   
}
fruitsList(fruits);
