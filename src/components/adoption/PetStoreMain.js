import React, { useState } from "react";
import InfoBox from "./InfoBox";
import PetForm from "./PetForm";

const displayTypesArray = ["All", "Available", "Not Available"];

export default function PetStoreMain() {
	const petsInStore = [
		{
			name: "Shibby",
			species: "Monkey",
			available: false,
			color: "Brown",
			petId: 0,
		},
		{
			name: "Rudolf",
			species: "Reindeer",
			available: true,
			color: "Brown",
			petId: 1,
		},
		{
			name: "Garfield",
			species: "Cat",
			available: true,
			color: "Orange/Black",
			petId: 2,
		},
		{
			name: "Charlie",
			species: "Dog",
			available: true,
			color: "Black/White",
			petId: 3,
		},
	];

	const [petsArray, setPetsArray] = useState(petsInStore);
	const [displayForm, setDisplayForm] = useState(false);

	const displayInfoBox = (displayType) => {
		// console.log({ displayType });
		return petsArray.map((elem) => {
			if (
				!!displayType &&
				displayTypesArray.includes(displayType) &&
				!!displayType &&
				displayType !== displayTypesArray[0]
			) {
				if (displayType === displayTypesArray[1] && elem.available) {
					return <InfoBox key={elem.petId} {...elem} />;
				}

				if (displayType === displayTypesArray[2] && !elem.available) {
					return <InfoBox key={elem.petId} {...elem} />;
				}
			} else {
				return <InfoBox key={elem.petId} {...elem} />;
			}
		});
	};

	const addNewPet = (pet) => {
		setPetsArray((prevState) => [
			...prevState,
			{ ...pet, petId: prevState.length },
		]);

		// best to use method above
		// setPetsArray([...petsArray, pet])
	};

	const toggleForm = () => {
		setDisplayForm(!displayForm);
	};

	return (
		<div>
			<h2>Pet Store Main Page</h2>
			<br />
			<div>
				<button onClick={toggleForm}>
					{displayForm ? "Hide" : "Show"}
				</button>
				<br />
				<br />
				{displayForm && <PetForm addPet={addNewPet} />}
			</div>
			<br />
			<div className="pet__container">
				{displayInfoBox(displayTypesArray[0])}
			</div>
		</div>
	);
}
