import styled from "styled-components";

export const GradientDiv = styled.div`
	opacity: 100%;
	position: relative;
	width: 100%;
	height: 100px;
	filter: blur(40px);
	background-image: linear-gradient(
		to right,
		#ffffff,
		rgba(248, 248, 248, 2),
		rgba(63, 100, 233, 0.596),
		rgba(233, 63, 63, 0.548),
		rgba(255, 183, 0, 0.192),
		rgba(255, 255, 255, 2),
		#ffffff
	);
`;

export const GradientDivMid = styled.div`
	opacity: 80%;
	position: relative;
	width: 90%;
	height: 100px;
	filter: blur(40px);
	background-image: linear-gradient(
		to right,
		#ffffff,
		rgba(248, 248, 248, 2),
		rgba(63, 100, 233, 0.315),
		rgba(233, 63, 63, 0.507),
		rgba(255, 183, 0, 0.164),
		rgba(255, 255, 255, 2),
		#ffffff
	);
`;

export const GradientBottom = styled.div`
	opacity: 40%;
	position: relative;
	width: 80%;
	height: 100px;
	filter: blur(40px);
	background-image: linear-gradient(
		to right,
		#ffffff,
		rgba(248, 248, 248, 2),
		rgba(63, 100, 233, 0.205),
		rgba(233, 63, 63, 0.151),
		rgba(255, 183, 0, 0),
		rgba(255, 255, 255, 2),
		#ffffff
	);
`;

export const ContainerNav = styled.div`
	border: 1px solid #ffffff2b;
	position: absolute;
	display: flex;
	gap: 40px;
	justify-content: center;
	align-items: center;
	height: 60px;
	width: 70%;
	background-color: #ffffff34;
	border-radius: 12px;
	top: 40px;

	.p2:hover {
		cursor: pointer;
		color: #ffffffa2;
		transition: 0.3s;
	}
`;
