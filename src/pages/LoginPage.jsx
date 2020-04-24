import React from "react";
import Login from "../components/Login";
import Deleteuser from "../components/Deleteuser";

function LoginPage() {
  const [data, setData] = React.useState({
    isAuthenticated: false,
    email: "",
    id: 0,
		player: {
    charactername: "",
    coins: 0,
    currentexp: 0,
    currenthealth: 0,
    currentmana: 0,
    defense: 0,
    dexterity: 0,
    equipmentitems: [],
    intelligence: 0,
    inventoryitems: [],
    maxexp: 0,
    maxhealth: 0,
    maxmana: 0,
    playerlevel: 0,
		strength: 0}
  });

  return (
    <div>
      {!data.isAuthenticated && <Login data={data} setData={setData} />}
      {data.isAuthenticated && <Deleteuser data={data} setData={setData} />}
    </div>
  );
}

export default LoginPage;
