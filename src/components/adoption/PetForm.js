import React, { useState } from "react";

export default function PetForm({ addPet }) {
	const [pet, setPet] = useState({
		name: "",
		species: "",
		available: false,
		color: "",
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log({ valueFromEvent: event.target, pet });
		addPet(pet);

		setTimeout(() => {
			setPet({
				name: "",
				species: "",
				available: false,
				color: "",
			});
		}, 1);
	};

	const handleChange = (event) => {
		// console.log({ [event.target.name]: event.target.value });

		setPet((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const handleChecked = (event) => {
		// console.log({ checked: event.target.checked });

		setPet((prevState) => ({
			...prevState,
			[event.target.name]: event.target.checked,
		}));
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:{" "}
				<input
					onChange={handleChange}
					name="name"
					type="text"
					value={pet.name}
				/>
			</label>
			<label>
				Species:{" "}
				<input
					onChange={handleChange}
					name="species"
					type="text"
					value={pet.species}
				/>
			</label>
			<label>
				Available:{" "}
				<input
					onChange={handleChecked}
					name="available"
					type="checkbox"
					checked={pet.available}
				/>
			</label>
			<label>
				Color:{" "}
				<input
					onChange={handleChange}
					name="color"
					type="text"
					value={pet.color}
				/>
			</label>
			<button>Add Pet</button>
		</form>
	);
}
