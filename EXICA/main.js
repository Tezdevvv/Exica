var nullMap1 = document.getElementById("null-map-1");
var nullMap2 = document.getElementById("null-map-2");
var nullMap1Value = false;
var nullMap2Value = false;

nullMap1.addEventListener('mouseover', function() {
    nullMap1Value = true;
    nullMap1Element();
    console.log(nullMap1Value);
});

nullMap2.addEventListener('mouseover', function() {
    nullMap2Value = true;
    nullMap2Element();
    console.log(nullMap2Value);
});

nullMap1.addEventListener('mouseout', function() {
    nullMap1Value = false;
    nullMap1Element();
    console.log(nullMap1Value);
});

nullMap2.addEventListener('mouseout', function() {
    nullMap2Value = false;
    nullMap2Element();
    console.log(nullMap2Value);
});

function nullMap1Element() {
    var text = "SAN ESO.";
    if (nullMap1Value === true) {
        typeWriter1(text, 0);
    } else {
        typeEraser1(text, text.length - 1);
    }
}

function nullMap2Element() {
    var text = "VIRTUOPOLIS.";
    if (nullMap2Value === true) {
        typeWriter2(text, 0);
    } else {
        typeEraser2(text, text.length - 1);
    }
}

function typeWriter1(text, i) {
    if (i < text.length) {
        document.getElementById("name-map-1").innerHTML += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter1(text, i);
        }, 42);
    }
}

function typeWriter2(text, i) {
    if (i < text.length) {
        document.getElementById("name-map-2").innerHTML += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter2(text, i);
        }, 42);
    }
}

function typeEraser1(text, i) {
    if (i >= 0) {
        var newText = text.slice(0, i);
        document.getElementById("name-map-1").innerHTML = newText;
        i--;
        setTimeout(function() {
            typeEraser1(text, i);
        }, 42);
    }
}

function typeEraser2(text, i) {
    if (i >= 0) {
        var newText = text.slice(0, i);
        document.getElementById("name-map-2").innerHTML = newText;
        i--;
        setTimeout(function() {
            typeEraser2(text, i);
        }, 42);
    }
}
