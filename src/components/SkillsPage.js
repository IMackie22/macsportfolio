import React from "react";
import styled, {ThemeProvider} from "styled-components";
import {lightTheme, mediaQueries} from "./Themes";
import {Design, Develop} from "./AllSvgs";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
	background-color: ${(props) => props.theme.body};
	width: 100vw;
	height: 100vh;
	position: relative;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	${mediaQueries(50)`
            flex-direction:column;
            padding:8rem 0;
height:auto;
            &>*:nth-child(5){
              margin-bottom:5rem;
            }

  `};
	${mediaQueries(30)`

            &>*:nth-child(5){
              margin-bottom:4rem;
            }

  `};
`;

const Main = styled.div`
	border: 2px solid ${(props) => props.theme.text};
	color: ${(props) => props.theme.text};
	background-color: ${(props) => props.theme.body};
	padding: 2rem;
	width: 30vw;
	height: 60vh;
	z-index: 3;
	line-height: 1.5;
	font-family: "Ubuntu Mono", monospace;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	cursor: pointer;

	${mediaQueries(60)`
            height: 55vh;
  `};

	${mediaQueries(50)`
              width: 50vw;
              height: max-content;
	`}

	&:hover {
		color: ${(props) => props.theme.body};
		background-color: ${(props) => props.theme.text};
	}
`;

const Title = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: calc(1em + 1vw);

	${mediaQueries(60)`
          font-size:calc(0.8em + 1vw);
  `};

	${mediaQueries(50)`
          font-size:calc(1em + 2vw);
          margin-bottom:1rem;
  `};

	${mediaQueries(30)`
                      font-size:calc(1em + 1vw);
  `};
	${mediaQueries(25)`
                      font-size:calc(0.8em + 1vw);
                      svg{
                        width:30px;
                        height:30px;
                      }
  `};

	${Main}:hover & {
		& > * {
			fill: ${(props) => props.theme.body};
		}
	}

	& > *:first-child {
		margin-right: 1rem;
	}
`;

const Description = styled.div`
	color: ${(props) => props.theme.text};
	font-size: calc(0.6em + 1vw);
	padding: 0.5rem 0;

	${Main}:hover & {
		color: ${(props) => props.theme.body};
	}

	${mediaQueries(50)`
            font-size: calc(0.8em + 1vw);

  `};

	${mediaQueries(30)`
                      font-size:calc(0.7em + 1vw);



  `};

	${mediaQueries(25)`
                      font-size:calc(0.5em + 1vw);



  `};

	strong {
		margin-bottom: 1rem;
		text-transform: uppercase;
	}

	ul,
	p {
		margin-left: 2rem;
	}
`;

const Btn = styled.div`
	background-color: ${(props) => props.theme.body};
	z-index: 1;
	position: relative;
`;

const SkillsPage = () => {
	return (
		<ThemeProvider theme={lightTheme}>
			<Btn>
				<PowerButton />
			</Btn>
			<Box>
				<LogoComponent theme="light" />
				<SocialIcons theme="light" />
				<ParticleComponent theme="light" />
				<Main>
					<Title>
						<Design width={40} height={40} /> Designer
					</Title>
					<Description>
						I love to create an array of new designs that speaks to the client.
						I like to Keep it clean, minimal and simple.
					</Description>
					<Description>
						<strong>I like to Create</strong>
						<ul>
							<li>Web Design</li>
							<li>Mobile Apps</li>
						</ul>
					</Description>
					<Description>
						<strong>Tools</strong>
						<ul>
							<li>Figma</li>
						</ul>
					</Description>
				</Main>
				<Main>
					<Title>
						<Develop width={40} height={40} /> FullStack
					</Title>
					<Description>
						I value the businesses or brands for which I'm creating, thus I
						enjoy bringing new ideas to life.
					</Description>
					<Description>
						<strong>Skills</strong>
						<p>
							HTML, CSS, Javascript, MERN, Next Js, Redux, Bootstrap, Tailwind,
							Firebase, Adobe Suite (Photoshop, InDesign, etc.), Microsoft
							Office, and Final Cut Pro.
						</p>
					</Description>
					<Description>
						<strong className="strong">Tools</strong>
						<p>VScode, Github, Codepen</p>
					</Description>
				</Main>
				<BigTitle text="SKILLS" top="80%" left="30%" />
			</Box>
		</ThemeProvider>
	);
};

export default SkillsPage;
