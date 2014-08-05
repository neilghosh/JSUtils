function Mean(v) {
     var sum = 0.0;
    for (var i = 0; i < v.length; i++) {
        sum = sum + v[i];
    }
    return sum / v.length;
}

function calB(x, y) {
    var meanX = Mean(x);
    var meanY = Mean(y);
    var sum = 0.0;
    var denom = 0.0;

    for (var i = 0; i < x.length; i++) {
        sum += (x[i] - meanX) * (y[i] - meanY);
    }

    for (i = 0; i < x.length; i++) {
        denom += (x[i] - meanX) * (x[i] - meanY);
    }

    return sum / denom;
}


function calA( x,  y) {
    return Mean(y) - calB(x, y) * Mean(x);
}

function forcast(x1, x, y) {
    return calA(x,y) + calB(x,y) * x1;
}

var x = [1, 2, 3, 4, 5, 6];
var y = [2, 4, 6, 8, 10, 13];

document.getElementById('text').innerHTML = forcast(2.5, x, y);
