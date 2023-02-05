let screen = document.querySelector('.input-res');
let all_buttons = document.querySelectorAll('.button');
let numbers = document.querySelectorAll('.number');
let comands = document.querySelectorAll('.comand');

let a = ''; // first num 
let b = ''; // second num 
let sign = ''; // знак числа
let finish = false;

document.querySelector('.ac').onclick = clearAll;

function clearAll() {
    a = ''; // first num 
    b = ''; // second num 
    sign = ''; // знак числа
    finish = false;
    screen.innerHTML = 0;
}

numbers.forEach((item, index) => {
    item.onclick = (event) => {


        if (b === '' && sign === '') {
            a += item.textContent;
            screen.textContent = a;
            console.log(screen, a);
        }

        else if (a !== '' && b !== '' && finish) {
            b = item.textContent;
            finish = false;
            screen.textContent = b;
            item.classList.remove('active-btn');

        }

        else {
            screen.textContent = '';
            b += item.textContent;
            screen.textContent = b;
            console.log(screen, b);
        }
        if (String(a).includes('..') == true || String(b).includes('..') == true) {
            a = '';
            b = '';
            sign = '';
            screen.textContent = 'error';
            console.log('err');
            finish = false;
            return true;

        }

        
    }
})
document.querySelector('.change_sign').onclick = () => {
    if (b === '') {
       
        a = a * -1;
        screen.textContent = a;
        
        console.log(+a);
    }
    else if (b !== '') {
        
        b = b* -1;
        screen.textContent = b;
        
    }
}

comands.forEach((item, index) => {
    item.onclick = (event) => {
        
        sign = item.textContent;
        console.log(sign);
        for (let i = 0; i < comands.length; i++) {
            if (comands[i].classList.contains('button-active')) comands[i].classList.remove('button-active');
        }
        
        item.classList.add('button-active');
        console.log(a, sign);
        if (finish) {
            item.classList.remove('button-active');
        }
       
       
    }
})
document.querySelector('.equal').onclick = () => {
    for (let i = 0; i < comands.length; i++) {
        if (comands[i].classList.contains('button-active')) comands[i].classList.remove('button-active');
    }

    if (b === '') b = a;
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = Number(a) - Number(+b);
                break;
            case 'X':
                a = Number(a) * Number(b);
                break;
            case '/':
                if (b === '0') {
                    screen.textContent = 'Error';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = Number(a) / Number(b);
                break;
            case '%':
                a = (Number(a) /100);
                break;
            
        }
        finish = true;
        screen.textContent = a;

    }



