
//计算等级
function calculateGrade() {
    var grade = 0;
    var score = document.getElementById("score").value;

    if(score.toString().length == 0){
        alert("请先输入分数");
        return;
    }

    if(isNaN(score)){
        document.getElementById("score").value = "";
        alert("请先输入数字");
        return;
    }

    score = parseInt(score);
    if(score < 0 || score > 100){
        document.getElementById("score").value = "";
        alert("请先输入0-100之间的分数");
        return;
    }

    if(score >= 90 && score <= 100){
        grade = 1;
    }else if(score >= 80 && score <= 90){
        grade = 2;
    }else if(score >= 70 && score <= 80){
        grade = 3;
    }else if(score >= 60 && score <= 70){
        grade = 4;
    }else if(score >= 50 && score <= 60){
        grade = 5;
    }else if(score >= 40 && score <= 50){
        grade = 6;
    }else if(score >= 30 && score <= 40){
        grade = 7;
    }else if(score >= 20 && score <= 30){
        grade = 8;
    }else if(score >= 10 && score <= 20){
        grade = 9;
    }else if(score >= 0 && score <= 10){
        grade = 10;
    }

    document.getElementById("result").innerHTML = grade + "等生";
}