<?php
function tabela($x,$y){
  $array_rand = number_obst($x,$y);

  for ($i=0; $i <= $y ; $i++) {
    echo "<tr>"; 
    for ($j=0; $j <= $x ; $j++) {
      if (in_array($j.$i,$array_rand)) {
        if ($j.$i == 00) {
          echo "<td class=\"tab_field \" id=\"x".$j."y".$i."\">";
          echo "</td>";
        }else{
        echo "<td class=\"tab_obst\" id=\"x".$j."y".$i."_\"><h3><center>: :</center></h3>";
        echo "</td>";
        }
      }else {
        echo "<td class=\"tab_field \" id=\"x".$j."y".$i."\">";
        echo "</td>";
      }
    }
    echo "</tr>";
  }
  echo "<div class=\"$x $y\" id=\"tabuleiro\"></div>";
}
function number_obst($maxX,$maxY){
  $area = $maxX + $maxY;
  $nobst = intval(($area / 2) / 2);
  $obst_total = array();
  for ($i=0; $i < $nobst ; $i++) { 
    $obsty = rand(0,$maxY);
    $obstx = rand(0,$maxX);
    array_push($obst_total,$obstx.$obsty);
  }
  // print_r( $obst_total);
  return $obst_total;
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Flat Moon Rover</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel="stylesheet" type="text/css" href="<?php echo "css/main.css?".time();?>">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

</head>
<body onkeypress="pressed_key()">  
  <center>
  <div class="row">
    <div class="col-10">
      <div>
        <h4>Flat Moon Rover</h4>
      </div>
      
      <table>
        <?php 
        if (isset($_POST['btn'])) {
          tabela($_POST['x'],$_POST['y']);  
        }
        else {
          tabela(10,10);
        }
        
        
        ?>  
      </table>
    </div>
    <div class="col-2">
    <form action="index.php" method="POST">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Qual o tamanho da sua lua?</h5>
          <div class="card-text">
              <label for="tamanho">Largura: </label>
              <input type="text" name="x" id="tamanha" class="form-group">

              <label for="tamanho">Altura: </label>
            <input type="text" name="y" id="tamanha" class="form-group">
        
          </div>
          <button type="submit" class="form-group btn btn-info" name="btn">Explorar</button>
        </div>
      </div>
    </form>
    
      
    </div>
  </div>
  </center>
</body>
</html>
<script src="js/controllers.js"></script>
<script src="js/mover.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
            <!-- let x0y0 = document.querySelector("x->0_y>0");
            let x1y0 = document.querySelector("x->1_y>0");
            let x2y0 = document.querySelector("x->2_y>0");
            
            let x0y1 = document.querySelector("x->0_y>1");
            let x1y1 = document.querySelector("x->1_y>1");
            let x2y1 = document.querySelector("x->2_y>1");
            
            let x0y2 = document.querySelector("x->0_y>2");
            let x1y2 = document.querySelector("x->1_y>2");
            let x2y2 = document.querySelector("x->2_y>2");
             -->