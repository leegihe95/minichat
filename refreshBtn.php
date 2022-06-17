<?php
    try{
        $db = new PDO('mysql:host=localhost;dbname=camiladb;charset=utf8', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    }catch (Exception $e){
        die('Error : ' . $e->getMessage());
    }
    
    if(!isset($_REQUEST['showMore'])){
        $limit = 5;
    } else{
        $limit = $_REQUEST['showMore'];
    }

    $response = $db->query("SELECT pseudo, message FROM minichat ORDER BY id DESC LIMIT 0, $limit");
    
    $outputs = $response->fetchAll(PDO::FETCH_ASSOC);
    $response->closeCursor();
    
    foreach($outputs as $output){
        // print_r($output['pseudo']);
        echo "<p>";
        echo htmlspecialchars($output['pseudo']).' : '.htmlspecialchars($output['message']);
        echo "</p>";
    }
?>