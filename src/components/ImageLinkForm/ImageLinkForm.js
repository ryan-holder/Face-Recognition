import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onImageSubmit }) => {
	return (
		<div className="mt4">
			<p className="f3">Does it have a face? Add an image and find out!</p>
			<div className="center">
				<div className="center form pa4 br3 shadow-5">
					<input
						className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
						onChange={onInputChange}
						type="text"
					/>
					<button
						className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
						onClick={onImageSubmit}
					>
						Detect
					</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;
