
var totalResult = "";
var secondNum = "";
var preOperFlag = "";
var currOperFlag = "";

//
var storageResult = 0;

//结果框
var resultTxt = document.getElementById("result");

//
var eles = document.getElementsByClassName("storage-container-key");
var len = eles.length;
var i = 0;
for(i = 0; i < len; i++){
    //用兼容性类方法来监听事件
    EventUtil.on(eles[i], "click", inputValue);
}

//注册操作事件
eles = document.getElementsByClassName("oper-container-key");
len = eles.length;
for(i = 0; i < len; i++){
    //用兼容性类方法来监听事件
    EventUtil.on(eles[i], "click", inputValue);
}

var keyNum0 = document.getElementById("oper-container-key-0")
keyNum0.addEventListener("click", inputValue);

var keyNum1 = document.getElementById("oper-container-key-1")
keyNum1.addEventListener("click", inputValue);

var storageResultFlag = false;

function inputValue(evt) {
    var btn = evt.target;
    var value = btn.value;

    if(isNaN(value)){
        switch(value){
            case "setStorage":
                doSetStorageResult();
                break;
            case "getStorage":
                doGetStorageResult();
                break;
            case "cleanStorage":
                doCleanStorageResult();
                break;
            case "clean":
                doClean();
                break;
            case "allclean":
                doAllclean();
                break;
            case ".":
                resultTxt.value += value;
                break;
            case "del":
                doDel();
                break;
            case "+":
            case "-":
            case "*":
            case "÷":
            case "%":
            case "=":
                preOperFlag = currOperFlag;
                currOperFlag = value;
                if(totalResult != "" && secondNum != ""){
                    doCalculate();
                }
                break;
            case "√":
                preOperFlag = value;
                if(totalResult != ""){
                    doCalculate();
                    preOperFlag = "";
                    currOperFlag = "";
                    totalResult = "";
                    secondNum = "";
                }
                break;
            case "+/-":
                preOperFlag = value;
                if(totalResult != ""){
                    doCalculate();
                    preOperFlag = "";
                    currOperFlag = "";
                    secondNum = "";
                }
                break;
            case "1/X":
                preOperFlag = value;
                if(totalResult != ""){
                    doCalculate();
                    preOperFlag = "";
                    currOperFlag = "";
                    secondNum = "";
                }
                break;
        }
    }else{
        if(totalResult != "" && currOperFlag != ""){
            secondNum += value;
            resultTxt.value = secondNum;
        }else{
            if(storageResultFlag){
                storageResultFlag = false;
                totalResult = "";
            }
            totalResult += value;
            resultTxt.value = totalResult;
        }
    }

    //计算
    function doCalculate(){
        switch (preOperFlag){
            case "+":
                if(totalResult != "" && secondNum != ""){
                    totalResult = doAddition(totalResult, secondNum);
                    secondNum = "";
                }
                break;
            case "-":
                if(totalResult != "" && secondNum != ""){
                    totalResult = doSubduction(totalResult, secondNum);
                    secondNum = "";
                }
                break;
            case "*":
                if(totalResult != "" && secondNum != ""){
                    totalResult = doMmultiply(totalResult, secondNum);
                    secondNum = "";
                }
                break;
            case "÷":
                if(totalResult != "" && secondNum != ""){
                    totalResult = doDivision(totalResult, secondNum);
                    secondNum = "";
                }
                break;
            case "%":
                if(totalResult != "" && secondNum != ""){
                    totalResult = doRemainder(totalResult, secondNum);
                    secondNum = "";
                }
                break;
            case "√":
                if(totalResult != ""){
                    totalResult = doSqrt(totalResult);
                }
                break;
            case "+/-":
                if(totalResult != ""){
                    totalResult = doPlusminus(totalResult);
                }
                break;
            case "1/X":
                if(totalResult != ""){
                    totalResult = doBackwards(totalResult);
                }
                break;
        }
        resultTxt.value = totalResult;
    }

    //存储
    function  doSetStorageResult() {
        if (resultTxt.value != "") {
            storageResultFlag = true;
            document.getElementById("storage-flag").style.display = "inline-block";
            storageResult = Number(resultTxt.value);
        }
    }

    //取存
    function doGetStorageResult() {
        resultTxt.value = storageResult;
        totalResult = storageResult;
    }

    //清存
    function doCleanStorageResult() {
        storageResult = 0;
        storageResultFlag = false
        document.getElementById("storage-flag").style.display = "none";
    }

    //del
    function doDel(){
        if(resultTxt.value.length > 1){
            resultTxt.value =  resultTxt.value.substring(0, resultTxt.value.length-1);
        }else{
            resultTxt.value = "";
        }
    }

    //清除
    function doClean(){
        totalResult = "";
        secondNum = "";
        preOperFlag = "";
        currOperFlag = "";
        resultTxt.value = "";
    }

    //全清
    function doAllclean(){
        doClean();
        doCleanStorageResult();
    }

    //加法
    function doAddition(num1, num2) {
        return Number(num1) + Number(num2);
    }

    //减法
    function doSubduction(num1, num2) {
        return Number(num1) - Number(num2);
    }

    //乘法
    function doMmultiply(num1, num2) {
        return Number(num1)*Number(num2);
    }

    //除法
    function doDivision(num1, num2) {
        if (Number(num2) == 0) {
            return 0;
        } else {
            return Number(num1)/Number(num2);
        }
    }

    //取模
    function doRemainder(num1, num2) {
        if (Number(num2) == 0) {
            return 0;
        } else {
            return Number(num1)%Number(num2);
        }
    }

    //取平方根
    function doSqrt(num1) {
        return  Math.sqrt(Number(num1));
    }

    //正负转换
    function doPlusminus(num1){
        if(num1 == 0)return 0;
        return -Number(num1);
    }

    //倒数
    function doBackwards(num1) {
        return 1/Number(num1);
    }
}
