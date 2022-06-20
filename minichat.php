<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Minichat</title>
</head>
<body>
    <h1>LIVE MINICHAT</h1>
    <form action="minichat_post.php" method="POST">
        <?php
        $pseudo = isset($_COOKIE['pseudo']) ? $_COOKIE['pseudo'] : '';
        ?>
        <label class="dispBlock" for="pseudo">Pseudo: </label>
        <input type="text" id="pseudo" name="pseudo" value="<?php echo $pseudo; ?>" autofocus>
        <br>
        <label class="dispBlock" for="message">Message: </label>
        <input type="text" id="message" name="message">
        <br>
        <input type="submit" value="Send">
    </form>
    <div id="chatTools">
        <button id="refresh">Refresh</button>
        <button id="showMore">Show More</button>
        <br>
        <span>Choose the range: </span>
        <input type="radio" name="range" id="ten"><label for="ten">10</label>
        <input type="radio" name="range" id="twenty"><label for="twenty">20</label>
        <input type="radio" name="range" id="all"><label for="all">Show all</label>
    </div>
    <div id="chatResult">
        <?php
            include('refreshBtn.php'); //since we're using the same code for refresh button, use include('php page')
        ?>
    </div>
<script type="text/javascript" src="./script.js"></script>
</body>
</html>