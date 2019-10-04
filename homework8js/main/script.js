let input = document.querySelector('.input');
    let button = document.querySelector('.button');
    let wrong = document.querySelector('.wrong');
    let right = document.querySelector('.right');
    
    
    input.addEventListener('focus', function addBorder(){
        input.classList.add('infocus')
        clearAll();
       })
    
    input. addEventListener('blur', function (){
        let price = document.querySelector('.input').value;
        if(input.value > 0 && price){
            right.classList.add('correct');
            input.classList.add('correct');
            button.classList.add('correct');
            right.innerHTML =  `The price is ${price} $.`;
            `The price is $ ${price}.`
        }
        else {
            input.classList.remove('infocus');
            right.classList.remove('correct');
            input.classList.add('incorrect');
            wrong.classList.add('incorrect');       
        }
    })
    function clearAll(){
        input.value = '';
        right.classList.remove('correct');
        button.classList.remove('correct');
        input.classList.remove('incorrect');
        input.classList.remove('correct');
        wrong.classList.remove('incorrect');
    }
    button.addEventListener('click', function() {
      clearAll()
    });