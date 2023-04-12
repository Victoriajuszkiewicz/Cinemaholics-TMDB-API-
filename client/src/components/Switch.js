import React from "react";
import "./Switch.css";
import cx from "classnames";
import { useNavigate } from "react-router-dom";

const Switch = ({ rounded = false, isToggled, onToggled }) => {
	const sliderCX = cx("slider", {
		rounded: rounded,
	});
	const navigate = useNavigate();
    
	return (
		<label className="switch">
			<input type="checkbox" checked={isToggled} onChange={onToggled} />

			<span className={sliderCX}></span>
		</label>
	);
};

export default Switch;
