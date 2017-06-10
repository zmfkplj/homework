<?php
    header("Content-type:application/json;charset=utf-8");

    require_once('db.php');

    if($link){

        if($_GET['newstype']){
            $newstype = $_GET['newstype'];
            $sql = "select * from news where `state` = 1 and `newstype` = '{$newstype}'";
            mysqli_query($link,"set names utf8");
            $result = mysqli_query($link,$sql);

            $senddata = array();
            while($row = mysqli_fetch_assoc($result)){
                array_push($senddata,array(
                    'id'=>$row['id'],
                    'newstype'=>$row['newstype'],
                    'newstitle'=>$row['newstitle'],
                    'newsimg'=>$row['newsimg'],
                    'newstime'=>$row['newstime'],
                    'newssrc'=>$row['newssrc'],
                ));
            }
            echo json_encode($senddata);
        }else{
            $sql = "select * from news where `state` = 1";
            mysqli_query($link,"SET NAMES utf8");
            $result = mysqli_query($link,$sql);

            $senddata = array();
            while($row = mysqli_fetch_assoc($result)){
                array_push($senddata,array(
                    'id'=>$row['id'],
                    'newstype'=>$row['newstype'],
                    'newstitle'=>$row['newstitle'],
                    'newsimg'=>$row['newsimg'],
                    'newstime'=>$row['newstime'],
                    'newssrc'=>$row['newssrc'],
                ));
            }
            echo json_encode($senddata);
        }
    }else{
        //echo json_encode(array('连接信息' => '连接失败'));

        echo json_encode(array('success'=>'none'));
    }

    mysqli_close($link);
?>