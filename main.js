const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const turno = document.getElementById('turno')

const relogio = setInterval(function time() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let turn = '';

    function formato(hr) {
        if (hr > 23) {
            turn = "Am"
        } else if (hr > 12) {
            turn = "Pm"
        }
        return turn;
    }

    function addZero(time) {
        if (time < 10) {
            time = "0" + time;
        }
        return time;
    }
    
    hr = addZero(hr);
    min = addZero(min);
    sec = addZero(sec);
    turn = formato(hr)

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;
    turno.textContent = turn
})