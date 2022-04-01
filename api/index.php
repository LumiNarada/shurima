<?php
/**header('Access-Control-Allow-Origin: *');
header("Acces-Control-Allow-Headers: X-API-KEY, Origin, Authorization, X-Requested-Whith, Content-Type, Accept, Acces-Control-Request-Method");
header("Acces-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
**/

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Acces-Control-Allow-Headers: *");
header("Allow: *");


//include_once './shurima.php';
define("local", "localhost");
define("usuario", "root");
define("contrasena", "");
define("nombre", "shurima");

$methodHTTP = $_SERVER['REQUEST_METHOD'];

switch ($methodHTTP){
    case 'GET':
        //Inicia conexión con base de datos
        $conexion = mysqli_connect(local, usuario, contrasena, nombre);
        if( !$conexion ){
            echo mysqli_connect_error();
            exit();
        }
        else {
            $consulta = "SELECT * FROM integrante";
            $respuesta = mysqli_query($conexion, $consulta);
            while($fila = mysqli_fetch_array($respuesta, MYSQLI_NUM)){
                $list[]= array(
                    "email"=>$fila[0],
                    "pass"=>$fila[1],
                    "nick"=>$fila[2],
                    "name"=>$fila[3],
                    "main"=>$fila[4],
                    "edad"=>$fila[5],
                    "rango"=>$fila[6],
                    "division"=>$fila[7],
                    "ruta_foto"=>$fila[8],
                    "ruta_video"=>$fila[9],
                    "administrador"=>$fila[10],
                    "aceptado"=>$fila[11]
                );
            }
            echo json_encode(["personas" => $list]);
        }
        break;
    case 'POST':
        $conexion = mysqli_connect(local, usuario, contrasena, nombre);
        if( !$conexion ){
            echo mysqli_connect_error();
            exit();
        }
        else {
            $json = file_get_contents("php://input");
            $data = json_decode($json);
            //$consulta= "INSERT INTO integrante VALUES ('yakiemon@gmail.com', '1234',  'Yakie', 'Jackie Chan', 'Yasuo', 60, 'Sirviente', 'Carton Corrugado', 'Yakie.jpg', 'https://www.youtube.com/embed/n8ImQ1SjdY0',FALSE, FALSE)";
            $consulta = "INSERT INTO integrante VALUES ('".$data->email."', '".$data->password."', '".$data->nick."', '".$data->nombre."',  '".$data->main."',  '".$data->edad."', '".$data->rango."',  '".$data->division."',  'profile.jpg',  '".$data->video."', FALSE, FALSE)";
            //$consulta = "INSERT INTO prueba VALUES ('coconuts')";
            $respuesta = mysqli_query($conexion, $consulta);
            //$usuario= $data->email; 
        }
        break;
    default:
        break;

}

?>