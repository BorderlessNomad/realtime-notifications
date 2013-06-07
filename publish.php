<?php
try {
    $redis = new Redis();
    $redis->connect('127.0.0.1', 6379);
    $redis->select(4); //db 4

    for($i = 0; $i < 100; $i++) {
        //Following will publish mini_content to activity channel
        $content = array(
            'id' => rand(101, 102),
            'publish' => array(
                'n_id' => rand(100000, 200000),
                'message' => null,
                'ts' => microtime_float()
            )
        );

        if($content['id'] == 101) {
            $content['publish']['message'] = rand(10, 49);
        } else {
            $content['publish']['message'] = rand(50, 99);
        }

        echo "<pre>";
        print_r($content);
        
        $redis->publish('activity', json_encode($content));

        usleep(rand(50000, 100000));
    }
} catch (RedisException $e) {
    echo "<pre>";
    print_r($e);
}

function microtime_float() {
    list($usec, $sec) = explode(" ", microtime());
    return date('Y-m-d H:i:s', $sec) . "." . $usec * 1000000;
}

?>