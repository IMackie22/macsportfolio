import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PowerBtn } from "../components/AllSvgs";

const Power = styled.button`
	postion: fixed;
	top: 2rem;
	margin-left: 50%;
	transform: translate(-50%, 0);
	background-color: #eeeeee;
	padding: 0.3rem;
	border-radius: 50%;
	border: 2px solid #00092c;
	width: 2.5rem;
	height: 2.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 15;
	cursor: pointer;

	&:hover {
		background-color: rgb(178, 6, 0);
		box-shadow: 0 0 8px 6px rgb(178, 6, 0);
	}

	& > *:first-child {
		text-decoration: none;
		color: inherit;
	}
`;

const PowerButton = () => {
	return (
		<Power>
			<NavLink to="/">
				<PowerBtn width={30} height={30} fill="currentColor" />
			</NavLink>
		</Power>
	);
};

export default PowerButton;
