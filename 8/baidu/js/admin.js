/**
 * Created by Administrator on 2017/4/23.
 */
$(document).ready(function () {
    var $newsTable = $('#newstable tbody');

   refreshNews('');


    //===================================新增 start=========================================
   $('#btnsubmit').click(function (e) {
       e.preventDefault();

      if($('#newstitle').val() ==="" || $('#newstype').val() ==="" || $('#newstime').val() ==="" || $('#newssrc').val() ===""
      ){
          if($('#newstitle').val() ===""){
              $('#newstitle').parent().addClass('has-error');
          }else{
              $('#newstitle').parent().removeClass('has-error');
          }

          if($('#newstype').val() ===""){
              $('#newstype').parent().addClass('has-error');
          }else{
              $('#newstype').parent().removeClass('has-error');
          }

          if($('#newstime').val() ===""){
              $('#newstime').parent().addClass('has-error');
          }else{
              $('#newstime').parent().removeClass('has-error');
          }

          if($('#newssrc').val() ===""){
              $('#newssrc').parent().addClass('has-error');
          }else{
              $('#newssrc').parent().removeClass('has-error');
          }

      } else{
          //提交添加
          var jsonNews = {
              newstitle:$('#newstitle').val(),
              newstype:$('#newstype').val(),
              newsimg:$('#newsimg').val(),
              newstime:$('#newstime').val(),
              newssrc:$('#newssrc').val()
          }

          $.ajax({
              url:'server/insert.php',
              type:'post',
              data:jsonNews,
              datatype:'json',
              success:function (data) {
                  console.log(data);
                  refreshNews('');
              }
          })
      }
   });
    //=================================== 新增 start=========================================


    //=================================== 删除 start=========================================
    var deleteId = null;
    $newsTable.on('click', '.btn-danger', function () {
        console.log('click');
        $('#deleteModal').modal('show');
        deleteId = $(this).parent().prevAll().eq(5).html();
    });

    $('#deleteModal #confirmDelete').click(function(e) {
        if (deleteId){
            $.ajax({
                url: 'server/delete.php',
                type: 'post',
                data: {newsid: deleteId},
                success: function (data) {
                    console.log('删除成功');
                    $('#deleteModal').modal('hide');
                    refreshNews('');
                }
            });
        }
    });
    //=================================== 删除 end=========================================

    //=================================== 修改 start=========================================
    //修改
    var updateId = null;
    $newsTable.on('click', '.btn-primary', function () {
        console.log('click');
        $('#updateModal').modal('show');
        updateId = $(this).parent().prevAll().eq(5).html();
        $.ajax({
            url:'server/curnews.php',
            type:'get',
            datatype:'json',
            data:{newsid:updateId},
            success:function (data) {
                console.log(data);
                $('#unewstitle').val(data[0].newstitle);
                $('#unewstype').val(data[0].newstype);
                $('#unewsimg').val(data[0].newsimg);
                $('#unewssrc').val(data[0].newssrc);
                var utime = data[0].newstime.split(' ')[0];
                $('#unewstime').val(data[0].utime);
            }
        });
    });

    //确认修改
    $('#updateModal #confirmUpdate').click(function(e) {
        if (updateId){
            $.ajax({
                url: 'server/update.php',
                type: 'post',
                data: {
                    newstitle:$('#unewstitle').val(),
                    newstype:$('#unewstype').val(),
                    newsimg:$('#unewsimg').val(),
                    newssrc:$('#unewssrc').val(),
                    newstime:$('#unewstime').val(),
                    newsid:updateId
                },
                success: function (data) {
                    $('#updateModal').modal('hide');
                    refreshNews('');
                }
            });
        }
    });
    //=================================== 修改 end=========================================

    //=================================== 刷新 start=========================================
    function refreshNews(newstype) {
        $newsTable.empty();

        $.ajax({
            type:'get',
            url:'server/getnews.php',
            datatype:'json',
            data:{newstype:newstype},
            success:function (data) {
                console.log(data);

                data.forEach(function (item, index,array) {
                    var $tdid = $('<td>').html(item.id);
                    var $tdtype = $('<td>').html(item.newstype);
                    var $tdtitle = $('<td>').html(item.newstitle);
                    var $tdimg = $('<td>').html(item.newsimg);
                    var $tdsrc = $('<td>').html(item.newssrc);
                    var $tdtime = $('<td>').html(item.newstime);
                    var $tdctrl = $('<td>');
                    var $tnupdate = $('<button>').addClass('btn btn-primary btn-xs').html('修改');
                    var $btndelete = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
                    $tdctrl.append($tnupdate, $btndelete);
                    var $tRow = $('<tr>');
                    $tRow.append($tdid,$tdtype,$tdtitle,$tdimg,$tdsrc,$tdtime,$tdctrl);
                    $newsTable.append($tRow);

                });
            }
        });
    }

});

