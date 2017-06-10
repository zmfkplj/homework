<?php
        header("Content-type:application/json;charset=utf-8");

        require_once('db.php');

        if($link){
            $sql = "select * from `news`";
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
        }

//        $link = mysqli_connect('localhost', 'root','', 'baidunews');
//        if($link){
//            echo json_encode(array('连接'=>'sucess'));
//        }else{
//            echo json_encode(array('连接'=>'fail'));
//        }



?>