import React from 'react';
import "./style.css";

export default function Timer(props) {
let ms = 0,
seconds = 0,
minutes = 0,
hours = 0;

Number.prototype.timer = function () {
const val = this.valueOf();
return val < 10 ? `0${val}` : val;
}
const updateHours = () => {
document.querySelector('#hours').innerHTML = (++hours).timer();
}
const updateMinutes = ()  => {
if (minutes === 59) {
    updateHours();
    minutes = 0;
}
document.querySelector('#minutes').innerHTML = (++minutes).timer();
}
const updateSeconds = ()  => {
if (seconds === 59) {
    updateMinutes();
    seconds = 0;
    
    // if all set to maximum value than clear timer
    if (hours === 23 && minutes === 59) return clearInterval(timeInterVal);
}
document.querySelector('#seconds').innerHTML = (++seconds).timer();


}
let timeInterVal = setInterval(() => {
if (ms > 1000) {
    ms = 0;
    updateSeconds();
}
ms = ms + 4;
document.querySelector('#ms').innerHTML = ms;
}, 0);

return (
    <section>
            <div class="container">
                <div class="row">
                    <div>
                        Hours
                    </div>
                    :
                    <div>
                        Minutes
                    </div>
                    :
                    <div>
                        Seconds
                    </div>
                    :
                    <div>
                        MS
                    </div>
                </div>
                <div class="row">
                    <div id="hours">
                        00
                    </div>
                    :
                    <div id="minutes">
                        00
                    </div>
                    :
                    <div id="seconds">
                        00
                    </div>
                    :
                    <div id="ms">
                        00
                    </div>
                </div>
            </div>
        </section>
)

}

