import React from "react";

export default function InfoBox({ name, species, available, color }) {
	return (
		<div className="info__box">
			<h3>This is {name}</h3>
			<p>
				{name} is a {color} {species}, which is currently{" "}
				{available
					? "looking for a new home"
					: "not looking for a new home"}
				.
			</p>
		</div>
	);

	// return (
	// 	<div className={props.containerClass}>
	// 		<img src={props.img} />
	// 		<h3>{props.title}</h3>
	// 		<p>{props.info}</p>
	// 	</div>
	// );
}
