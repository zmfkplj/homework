
function calculate() {
    var arr = ["a", "x", "b", "d", "m","a","k","m","p","j","a"];

    /**
     *  统计出现信息对象
     *  count       出现次数
     *  indexList   出现的下标列表
     */
    var countObj = {};

    var len = arr.length;
    var char;
    for(var i = 0; i < len; i++){
        char = arr[i];

        //查找是否出现过
        var charCountObj = countObj[char];
        if(charCountObj == null){
            //第一次出现
            charCountObj = {};
            charCountObj.count = 0;
            charCountObj.indexList = [];
        }

        //非第一次出现
        charCountObj.count++;
        charCountObj.indexList.push(i);
        countObj[char] = charCountObj;
    }

    //查找出现次数最多的
    var maxCount = 0;
    var maxCountCharKey;
    for(var key in countObj){
        var charCountObj = countObj[key];
        if(charCountObj.count > maxCount){
            maxCount = charCountObj.count;
            maxCountCharKey = key;
        }
    }
    console.log(maxCountCharKey + " " + countObj[maxCountCharKey].count + " " + countObj[maxCountCharKey].indexList.toString());
}
