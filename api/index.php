<?php
header('Access-Control-Allow-Origin: *');
header("Acces-Control-Allow-Headers: X-API-KEY, Origin, Authorization, X-Requested-Whith, Content-Type, Accept, Acces-Control-Request-Method");
header("Acces-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

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
                    "email"=>$fila[0]
                );
            }
            echo json_encode(["personas" => $list]);
        }

        break;
    default:
        break;

}
?>