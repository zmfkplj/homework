/**
 * Created by Administrator on 2017/4/25.
 */

$(document).ready(function () {

    $.ajax({
        type: 'get',
        url: 'server/demo.php',
        datatype: 'json',
        success: function (data) {
            console.log(data);
        }

    });

});