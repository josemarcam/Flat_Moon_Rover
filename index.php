
<?php
function tabela($x,$y){
  for ($i=0; $i <= $y ; $i++) {
    echo "<tr>"; 
    for ($j=0; $j <= $x ; $j++) {
      echo "<td class=\"tab_field\" id=\"x".$j."y".$i."\">";
      echo "</td>";
    }
    echo "</tr>";
  }
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel="stylesheet" type="text/css" href="<?php echo "css/main.css?".time();?>">
</head>
<body onkeypress="pressed_key()">  
  <center>
    <table>
      <div>
        <?php tabela(10,10);?>
    </div>  
    <div>
      <h4>testeee</h4>
    </div>
  </table>
  </center>
</body>
</html>
<script src="js/controllers.js"></script>
    <script src="js/mover.js"></script>
    <script>
      

    </script>
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