import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";

const Logo = () => {
	return (
		<div className="ma4 mt0">
			<Tilt
				className="Tilt br2 shadow-2 bg-light-purple"
				options={{ max: 40 }}
				style={{ height: 100, width: 100 }}
			>
				<div className="Tilt-inner"> H </div>
			</Tilt>
		</div>
	);
};

export default Logo;
