import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor]= useState ("red");
	
	return (
		<>
		<h1 className=" text-center">{color == "red" ? "Stop":""}</h1>
		<h1 className="text-center">{color == "yellow" ? "Caution":""}</h1>
		<h1 className="text-center">{color == "green" ? "Advance":""}</h1>
		<div className="container">
			<div className="col-1 background">
<div onClick={() => setColor("red")} className={color == "red" ? "red light active" : "red light"}></div>
<div onClick={() => setColor("yellow")} className={color == "yellow" ? "yellow light active" : "yellow light"}></div>
<div onClick={()=> setColor("green")} className={color == "green" ? "green light active" : "green light"}></div>
</div>
</div>
</>
	);
};
//className={condicion ? "una clase" : "otra clase"}
//opacity-25
export default Home;
