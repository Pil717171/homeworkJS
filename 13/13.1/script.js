import {Timer} from './timer';

let element = document.querySelector('.area');
let elementHelp = document.querySelector('.help');
let but = document.querySelector('.area-button');
let area = document.querySelector('input');

but.addEventListener('click', firstStart);

function firstStart () {
    elementHelp.innerHTML = 'Измерение пульса начнется через - '
    const time = new Timer (6, element);
    time.start()
    .then ((res) => {
        time.reset(16, element);
        elementHelp.innerHTML = 'Измеряйте пульс на протяжении - '
        return time.start()
    })
    .then ((res) => {
        elementHelp.innerHTML = 'Введите результат в поле снизу и нажмите на кнопку'
        element.innerHTML = '';
        let butSum = document.createElement('button');
        butSum.innerHTML = 'Посчитать результат';
        document.body.appendChild(butSum);
        butSum.addEventListener('click', (e) => {
            e.preventDefault();
            elementHelp.innerHTML = `Ваш пульс равен - ${area.value*4} ударов в минуту`        
        })
    })
}



