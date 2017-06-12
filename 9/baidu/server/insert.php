<?php
    header("Content-type:application/json;charset=utf-8");

    require_once('db.php');

    if($link){
        $newstitle = $_POST['newstitle'];
        $newstype = $_POST['newstype'];
        $newsimg = $_POST['newsimg'];
        $newstime = $_POST['newstime'];
        $newssrc= $_POST['newssrc'];

        //字段名用反单引号，后面内容用单引号
        $sql = "INSERT INTO `news`(`newstitle`, `newstype`,`newsimg`,`newstime`,`newssrc`,`state`) VALUES ('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}',1)";
        mysqli_query($link,"set names utf8");

        if (mysqli_query($link, $sql)) {
            echo json_encode(array('success'=>'ok'));
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($link);
        }

    }

?>