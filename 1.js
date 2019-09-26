let input1 = document.getElementById("number1"),
    input2 = document.getElementById("number2"),
    buttons = document.querySelectorAll("button");

    buttons.forEach((item, i) => {
        item.addEventListener('click', onOperationButtonClick);
    });
      
function makeOperation(x) {
    let sum;
    if(x === "+"){
        sum = +input1.value + +input2.value;
    }else if (x === "-") {
        sum = +input1.value - +input2.value;
    }else if (x === "*") {
        sum = +input1.value * +input2.value;
    }else if (x === "/") {
        sum = +input1.value / +input2.value;
    }
    alert(sum);
}

function onOperationButtonClick(event) {
    let operation = event.currentTarget.innerHTML;
    
    makeOperation(operation);
}