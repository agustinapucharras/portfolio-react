import Card from "react-bootstrap/Card";
import "../css/main.css"

const Main = (props) => {

    console.log(props.Alumno.imagen)
  return (
    
    <div>
      <div className="cardMain">
      <Card style={{ width: "18rem" }} className="card" >
        <Card.Img variant="top" src={props.Alumno.imagen} className="imgMain"/>
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>{props.Alumno.nombre} {props.Alumno.apellido}</Card.Title>
          <Card.Text>
          Estudiante de Programación de la UTN-FRT, se utilizar lenguajes tales como: {props.Alumno.lenguajes.map((lenguaje,index )=> <span key={index}>{lenguaje} </span>)}
          </Card.Text>
          <Card.Text>
            Tengo un perro que se llama {props.Alumno.mascotas.nombre}, su raza es {props.Alumno.mascotas.raza} y tiene {props.Alumno.mascotas.edad} años.
          </Card.Text>
        </Card.Body>
      </Card>

      </div>
      <hr />
    </div>
  );
};

export default Main;
