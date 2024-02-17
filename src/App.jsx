import logo from "./logo.svg";
import "./App.css";
import InfoBox from "./components/adoption/InfoBox";
import React from "react";
import Home from "./components/Home";
import PetStoreMain from "./components/adoption/PetStoreMain";
import PetForm from "./components/adoption/PetForm";

function App() {
	// write code here
	// const infoBoxData = [
	// 	{
	// 		img: "/noImg",
	// 		info: "Info Box Info",
	// 	},
	// 	{
	// 		title: "2nd Title",
	// 		info: "Info Box Info",
	// 	},
	// 	{
	// 		title: "3rd Title",
	// 		img: "/noImg",
	// 		info: "Info Box Info",
	// 	},
	// 	{
	// 		title: "4th Title",
	// 		img: "/noImg",
	// 	},
	// ];

	// const data = {
	// 	title: "NO TITLE HERE",
	// 	img: "/noImg",
	// 	info: "NO TITLE INFO BOX",
	// };

	// const displayInfoBox = () => {
	// 	return infoBoxData.map((elem, i) => {
	// 		// return !!elem.title ? <InfoBox {...elem} /> : <InfoBox {...data} />;
	// 		return !!elem.title && <InfoBox key={i} {...elem} />;
	// 	});
	// };

	return (
		<div className="App">
			<Home />
			<br />
			<PetStoreMain />
		</div>
	);

	// return (
	// 	<div className="App">
	// 		<div>
	// 			<div>
	// 				<img src="" />
	// 				<img src="" />
	// 			</div>
	// 			<div>
	// 				<div>
	// 					<h1></h1>
	// 					<p></p>
	// 				</div>
	// 				<button></button>
	// 			</div>
	// 		</div>

	// 		<div>
	// 			{/* <InfoBox blah={""} />
	// 			<InfoBox goober={"another type of booger"} />
	// 			<InfoBox title={"3rd Box"} img={"/noImage"} info={"my info"} />
	// 			<InfoBox {...data} /> */}
	// 			{displayInfoBox()}
	// 		</div>
	// 	</div>
	// );
}

export default App;
