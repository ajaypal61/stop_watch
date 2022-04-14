var hr = 0;
var min = 0;
var sec = 0;
var count = 0;



var timer = false;

function start() {
    timer = true;
    stopwatch();
}


function stop() {
    timer = false;
}


function reset() {
    timer = false;

    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}



function stopwatch() {
    if (timer == true) {
        count = count + 1;
        

        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }

        if (sec == 60) {
            min = min + 1;
            sec = 0;

        }

        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }



        var hrsting = hr;
        var minsting = min;
        var secsting = sec;
        var countsting = count;


        if (hr < 10) {
            hrsting = "0" + hrsting;
        }


        if (min < 10) {
            minsting = "0" + minsting;
        }


        if (sec < 10) {
            secsting = "0" + secsting;
        }


        if (count < 10) {
            countsting = "0" + countsting;
        }

        document.getElementById("hr").innerHTML = hrsting;
        document.getElementById("min").innerHTML = minsting;
        document.getElementById("sec").innerHTML = secsting;
        document.getElementById("count").innerHTML = countsting;


        setTimeout("stopwatch()", 10);
    }
}



