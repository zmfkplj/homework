
//计算
function calculate(num1, num2, oper) {
    var result = 0;
    switch (oper){
        case "加":
            result = num1 + num2;
            break;
        case "减":
            result = num1 - num2;
            break;
        case "乘":
            result = num1 * num2;
            break;
        case "除":
            if(num2 == 0){
                alert("数字2不能为0");
            }
            result = num1 / num2;
            result.toFixed(8);
            break;
    }
    return result;
}

function  showResult() {
    //验证输入是否合法
    var num1 = document.getElementById("num1").value;
    if(num1.toString().length == 0) {
        alert("请先输入数字1");
        return;
    }

    if(isNaN(num1)){
        alert("请先输入数字1类型为数字");
        return;
    }
    num1 = parseFloat(num1);

    //验证输入是否合法
    var num2 = document.getElementById("num2").value;
    if(num2.toString().length == 0) {
        alert("请先输入数字2");
        return;
    }
    if(isNaN(num2)){
        alert("请先输入数字2类型为数字");
        return;
    }
    num2 = parseFloat(num2);

    var oper = document.getElementById("oper").value;
    document.getElementById("result").innerHTML = "结果：" + calculate(num1, num2, oper);
}