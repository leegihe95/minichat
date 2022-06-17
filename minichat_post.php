<?php
    if((!empty($_POST['pseudo'])) AND (!empty($_POST['message']))){
        $pseudo = $_POST['pseudo'];
        $message = $_POST['message'];
    
        // setting cookies
        setcookie('pseudo', $pseudo, time() + 365*24*3600, null, null, false, true);
    
        try{
            $db = new PDO('mysql:host=localhost;dbname=camiladb;charset=utf8', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
        }catch (Exception $e){
            die('Error : ' . $e->getMessage());
        }
    
        $req = $db->prepare("INSERT INTO minichat(ID, pseudo, message) VALUES (:id, :pseudo, :message)") or die (print_r($db->errorInfo()));
        $req->execute(array(
            'id' => '',
            'pseudo' => $pseudo,
            'message' => $message
        ));
        $req->closeCursor();
    }
    header('Location: minichat.php');
?>