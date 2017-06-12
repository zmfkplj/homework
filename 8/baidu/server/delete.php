<?php
    header("Content-type:application/json;charset=utf-8");

    require_once('db.php');

    if($link){
        $newsid = $_POST['newsid'];

        mysqli_query($link, "SET NAMES utf8");
//        $sql = "delete from news where `news`.`id` = '{$newsid}'";
        $sql = "update `news` set `state` = 2 where `id` = '{$newsid}'";

        mysqli_query($link, $sql);

        echo json_encode(array('删除状态'=>'成功'));
    }

    mysqli_close($link);


?>