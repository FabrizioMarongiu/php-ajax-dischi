<?php
include __DIR__ . '/database.php'
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap" rel="stylesheet"> 
    <title>PHP Dischi</title>
</head>
<body>
    <div id="app">
    <header class="header">
        <div class="container">
            <img src="../php-dischi/logo.png" alt="">
        </div>
    </header>
    <main>
        <div class="container">
            <div class="music-list">
                <?php
                    foreach($database as $key => $data){?>
                <div class="album">
                    

                    <img src=<?php echo $data['poster'] ?> alt="">

                    <h4><?php echo $data['title'] ?></h4>
                    <h5><?php echo $data['author'] ?></h5>
                    <h4><?php echo $data['year'] ?></h4>
                    <h5><?php echo $data['genre'] ?></h5>
                  
                    


                </div>
                <?php }
                    ?>
                
                
            </div>
        </div>
    </main>
    </div>

    
</body>
</html>