import { React } from "react";

function Card({ users }) {
  return (
    <div className="card" styles={{ width: 18 }}>
      <div className="card-header">DADOS USUÁRIO</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          {<h4> País: {users.country.name}</h4>}
        </li>
        <li className="list-group-item">
          {<h4>Cidade: {users.city.name}</h4>}
        </li>
        <li className="list-group-item">{<h4>IP: {users.address}</h4>}</li>
        <li className="list-group-item">
          {<h4>Latitude: {users.city.location.lat}</h4>}
        </li>
        <li className="list-group-item">
          {<h4>Longitude: {users.city.location.long}</h4>}
        </li>
      </ul>
    </div>
  );
}
export default Card;
