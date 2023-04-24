import React from "react";
import "./User.css";

import av1 from "../../avatars/av1.png";
import av2 from "../../avatars/av2.png";
import av3 from "../../avatars/av3.png";
import av4 from "../../avatars/av4.png";
import av5 from "../../avatars/av5.png";
import av6 from "../../avatars/av6.png";
import av7 from "../../avatars/av7.png";
import av8 from "../../avatars/av8.png";

const User = (props) => {
	const { id } = props;
	const { user } = props;

	return (
		<div>
			<div className="container">
				<h2>Hello {user?.name}!</h2>
			</div>
			<div className="container">
				<h2>Choose your avatar</h2>
				<img
					className="avatarimg"
					src={av1}
					style={{ width: 100 }}
					// id="av1"
					onClick={() => props.handleAvatar("av1")}
				/>
				<img
					src={av2}
					style={{ width: 100 }}
					onClick={() => props.handleAvatar("av2")}
					// id="av2"
				/>
				<img
					src={av3}
					style={{ width: 100 }}
					onClick={() => props.handleAvatar("av3")}
					// id="av3"
				/>
				<img
					src={av4}
					style={{ width: 100 }}
					onClick={() => props.handleAvatar("av4")}
					// id="av4"
				/>
				<img
					src={av5}
					style={{ width: 100 }}
					onClick={() => props.handleAvatar("av5")}
					// id="av5"
				/>
				<img
					src={av6}
					style={{ width: 100 }}
					onClick={() => props.handleAvatar("av6")}
					// id="av6"
				/>
				<img
					src={av7}
					style={{ width: 100 }}
					onClick={() => props.handleAvatar("av7")}
					// id="av7"
				/>
				<img
					src={av8}
					style={{ width: 100 }}
					onClick={() => props.handleAvatar("av8")}
					// id="av8"
				/>
				<h2>My favourite list</h2>
			</div>
		</div>
	);
};

export default User;
