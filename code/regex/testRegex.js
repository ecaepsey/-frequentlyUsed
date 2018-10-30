var regex = /^vexillology$/i;

function getValue()  {
    return document.getElementById("myinput").value;
}

function test() {
    alert(regex.test(getValue()));
}

function match() {
    alert(getValue().match(regex));    
}
