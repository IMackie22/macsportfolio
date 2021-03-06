// create svg as a react component

export const PowerBtn = (props) => {
	return (
		<svg
			color="#ff5f00"
			aria-hidden="true"
			data-prefix="fas"
			data-icon="power-off"
			class="svg-inline--fa fa-power-off fa-w-16"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			{...props}
		>
			<path
				fill={props.fill}
				d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"
			/>
		</svg>
	);
};

export const Github = (props) => {
	return (
		<svg
			color="#FF5F00"
			aria-hidden="true"
			data-prefix="fab"
			data-icon="github"
			className="prefix__svg-inline--fa prefix__fa-github prefix__fa-w-16"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 496 512"
			{...props}
		>
			<path
				fill={props.fill}
				d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
			/>
		</svg>
	);
};

export const Linkedin = (props) => (
	<svg
		color="#00092C"
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		{...props}
	>
		<path
			fill={props.fill}
			d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM7.738 17a1.262 1.262 0 0 1-1.262-1.262v-4.477A1.262 1.262 0 0 1 9 11.262v4.477C9 16.435 8.435 17 7.738 17zm-.044-8.283c-.771 0-1.286-.514-1.286-1.2s.514-1.2 1.371-1.2c.771 0 1.286.514 1.286 1.2s-.514 1.2-1.371 1.2zM16.779 17a1.221 1.221 0 0 1-1.221-1.221v-2.605c0-1.058-.651-1.174-.895-1.174s-1.058.035-1.058 1.174v2.605c0 .674-.547 1.221-1.221 1.221h-.081a1.221 1.221 0 0 1-1.221-1.221v-4.517a1.262 1.262 0 1 1 2.524 0S13.888 10 15.804 10c1.219 0 2.196.977 2.196 3.174v2.605c0 .674-.547 1.221-1.221 1.221z"
		/>
	</svg>
);

export const Facebook = (props) => {
	return (
		<svg
			color="#00092C"
			aria-hidden="true"
			data-prefix="fab"
			data-icon="facebook"
			className="prefix__svg-inline--fa prefix__fa-facebook prefix__fa-w-16"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			{...props}
		>
			<path
				fill={props.fill}
				d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
			/>
		</svg>
	);
};

export const Instagram = (props) => (
	<svg
		color="#00092C"
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		{...props}
	>
		<path
			fill={props.fill}
			d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
		/>
	</svg>
);

export const Basketball = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 370 370" {...props}>
		<defs>
			<linearGradient
				id="a"
				x1={266.01}
				gradientUnits="userSpaceOnUse"
				y1={365.8}
				gradientTransform="translate(-112.52 -271)"
				x2={346.31}
				y2={357.98}
			>
				<stop stopColor="#f57936" offset={0} />
				<stop stopColor="#f57936" stopOpacity={0} offset={1} />
			</linearGradient>
			<linearGradient
				id="b"
				x1={274.49}
				gradientUnits="userSpaceOnUse"
				y1={342.5}
				gradientTransform="translate(-112.52 -271)"
				x2={282.3}
				y2={305.03}
			>
				<stop stopColor="#f3813b" offset={0} />
				<stop stopColor="#f3813b" stopOpacity={0} offset={1} />
			</linearGradient>
			<linearGradient
				id="c"
				x1={245.71}
				gradientUnits="userSpaceOnUse"
				y1={377.69}
				gradientTransform="translate(-112.52 -271)"
				x2={250.36}
				y2={321.84}
			>
				<stop stopColor="#f9a465" offset={0} />
				<stop stopColor="#f9a465" stopOpacity={0} offset={1} />
			</linearGradient>
			<linearGradient
				id="d"
				x1={225.99}
				gradientUnits="userSpaceOnUse"
				y1={400.07}
				gradientTransform="translate(-112.52 -271)"
				x2={165.66}
				y2={383.22}
			>
				<stop stopColor="#faa668" offset={0} />
				<stop stopColor="#faa668" stopOpacity={0} offset={1} />
			</linearGradient>
			<linearGradient
				id="e"
				x1={199.3}
				gradientUnits="userSpaceOnUse"
				y1={420.02}
				gradientTransform="translate(-112.52 -271)"
				x2={161.36}
				y2={447.11}
			>
				<stop stopColor="#f17e39" offset={0} />
				<stop stopColor="#f17e39" stopOpacity={0} offset={1} />
			</linearGradient>
			<linearGradient
				id="f"
				x1={218.14}
				gradientUnits="userSpaceOnUse"
				y1={429.69}
				gradientTransform="translate(-112.52 -271)"
				x2={213.35}
				y2={481.32}
			>
				<stop stopColor="#f67a34" offset={0} />
				<stop stopColor="#f67a34" stopOpacity={0} offset={1} />
			</linearGradient>
			<linearGradient
				id="g"
				x1={235.32}
				gradientUnits="userSpaceOnUse"
				y1={407.04}
				gradientTransform="translate(-112.52 -271)"
				x2={277.47}
				y2={450.98}
			>
				<stop stopColor="#fc9f59" offset={0} />
				<stop stopColor="#fc9f59" stopOpacity={0} offset={1} />
			</linearGradient>
			<linearGradient
				id="h"
				x1={264.82}
				gradientUnits="userSpaceOnUse"
				y1={375.79}
				gradientTransform="translate(-112.52 -271)"
				x2={314.27}
				y2={407.69}
			>
				<stop stopColor="#fc9f59" offset={0} />
				<stop stopColor="#fc9f59" stopOpacity={0} offset={1} />
			</linearGradient>
			<linearGradient
				id="i"
				x1={465.71}
				gradientUnits="userSpaceOnUse"
				y1={527.25}
				gradientTransform="translate(-112.52 -271)"
				x2={318.1}
				y2={408.09}
			>
				<stop stopColor="#9f410d" offset={0} />
				<stop stopColor="#9f410d" stopOpacity={0} offset={1} />
			</linearGradient>
			<linearGradient
				id="j"
				x1={442.48}
				gradientUnits="userSpaceOnUse"
				y1={360.5}
				gradientTransform="translate(-112.52 -271)"
				x2={334.06}
				y2={358.8}
			>
				<stop stopColor="#a1420e" offset={0} />
				<stop stopColor="#a1420e" stopOpacity={0} offset={1} />
			</linearGradient>
			<linearGradient
				id="k"
				x1={325.34}
				gradientUnits="userSpaceOnUse"
				y1={277.19}
				gradientTransform="translate(-112.52 -271)"
				x2={302.92}
				y2={309.85}
			>
				<stop stopColor="#a1420e" offset={0} />
				<stop stopColor="#a1420e" stopOpacity={0} offset={1} />
			</linearGradient>
			<linearGradient
				id="l"
				x1={202.07}
				gradientUnits="userSpaceOnUse"
				y1={285.65}
				gradientTransform="translate(-112.52 -271)"
				x2={221.25}
				y2={314.59}
			>
				<stop stopColor="#a1420e" offset={0} />
				<stop stopColor="#a1420e" stopOpacity={0} offset={1} />
			</linearGradient>
			<linearGradient
				id="m"
				x1={128.57}
				gradientUnits="userSpaceOnUse"
				y1={365.34}
				gradientTransform="translate(-112.52 -271)"
				x2={167.59}
				y2={383.22}
			>
				<stop stopColor="#a1420e" offset={0} />
				<stop stopColor="#a1420e" stopOpacity={0} offset={1} />
			</linearGradient>
			<linearGradient
				id="n"
				x1={362.31}
				gradientUnits="userSpaceOnUse"
				y1={608.8}
				gradientTransform="translate(-112.52 -271)"
				x2={265.11}
				y2={446.23}
			>
				<stop stopColor="#a1420d" offset={0} />
				<stop stopColor="#a1420d" stopOpacity={0} offset={1} />
			</linearGradient>
			<linearGradient
				id="o"
				x1={224.3}
				gradientUnits="userSpaceOnUse"
				y1={615.29}
				gradientTransform="translate(-112.52 -271)"
				x2={216.96}
				y2={488.47}
			>
				<stop stopColor="#a1420d" offset={0} />
				<stop stopColor="#a1420d" stopOpacity={0} offset={1} />
			</linearGradient>
			<linearGradient
				id="p"
				x1={118.66}
				gradientUnits="userSpaceOnUse"
				y1={489.24}
				gradientTransform="translate(-112.52 -271)"
				x2={161.36}
				y2={450.93}
			>
				<stop stopColor="#a3430e" offset={0} />
				<stop stopColor="#a3430e" stopOpacity={0} offset={1} />
			</linearGradient>
		</defs>
		<path d="M6.113 184.641a178.457 178.457 0 1 0 356.913 0 178.457 178.457 0 1 0-356.913 0z" />
		<path
			fillRule="evenodd"
			fill="#d65a1e"
			d="m239.76 119.31 23.46 28.9c-57.19 41.9-32.86 187.63-96.28 214-44.87-4.41-84.89-25.47-113.78-56.9 57.83-69.47 117.64-135.6 186.6-186z"
		/>
		<path
			fillRule="evenodd"
			fill="#d65a1e"
			d="m206.04 86.808 25.28 25.282C147.56 183.1 94.56 242.58 48.97 299.28l-.75.43C21.96 268.64 6.13 228.47 6.13 184.62c0-3.55.11-7.07.31-10.56 31.72-64 150.87-43.02 199.6-87.252z"
		/>
		<path
			fillRule="evenodd"
			fill="#d65a1e"
			d="M100.51 37.745c39.81.398 90.39 26.012 95.31 40.656C194.2 115.16 25.22 104.39 7.44 165.06l-.25.03c5.59-51.2 32.84-95.91 72.41-124.75 6.46-1.878 13.55-2.668 20.91-2.595z"
		/>
		<path
			fillRule="evenodd"
			fill="#d65a1e"
			d="M184.57 6.183c8.95 0 17.77.662 26.37 1.937 26.55 28.735 12.38 54.55-1.87 62.438-12.17 8.663-43.55-45.58-122.22-35.219 28.08-18.426 61.65-29.156 97.72-29.156zM265.91 158.68c1.63.03 3.333.36 5.127.97 23.257 18.25 65.801 106.07 40.937 149.85-.005 0 .005.02 0 .03-32.392 33.03-77.524 53.53-127.4 53.53-1.37 0-2.73 0-4.1-.03 53.74-38.84 42.04-193.68 85.44-204.35z"
		/>
		<path
			fillRule="evenodd"
			fill="#d65a1e"
			d="M308.849 136.15c19.536.62 42.335 10.86 53.063 33.13l.562 1.34c.36 4.62.563 9.29.563 14 0 44.15-16.068 84.55-42.657 115.72 24.609-77.25-50.266-145.17-42.125-152.72 5.382-7.8 17.227-11.89 30.594-11.47z"
		/>
		<path
			fillRule="evenodd"
			fill="#d65a1e"
			d="M314.505 62.37c25.213 26.784 42.28 61.34 47.125 99.69-18.967-31.72-47.261-43.24-93-19.25l-23.47-29.5c15.33-13.829 47.642-37.702 69.345-50.94zM218.66 9.433c34.96 6.768 66.285 23.757 90.752 47.718l-.438.782c-25.737 11.719-47.754 30.929-70.434 48.747L211.47 81.4c17.64-17.783 31.24-37.201 7.19-71.967z"
		/>
		<path
			fillRule="evenodd"
			fill="url(#a)"
			d="M268.66 37.745c-39.81.398-90.39 26.012-95.31 40.656 1.62 36.759 170.6 25.989 188.38 86.659l.25.03c-5.59-51.2-32.84-95.91-72.41-124.75-6.46-1.878-13.55-2.668-20.91-2.595z"
			transform="matrix(-1 0 0 1 369.17 0)"
		/>
		<path
			fillRule="evenodd"
			fill="url(#b)"
			d="M184.6 6.183c-8.95 0-17.77.662-26.37 1.937-26.55 28.735-12.38 54.55 1.87 62.438 12.17 8.663 43.55-45.58 122.22-35.219-28.08-18.426-61.65-29.156-97.72-29.156z"
			transform="matrix(-1 0 0 1 369.17 0)"
		/>
		<path
			fillRule="evenodd"
			fill="url(#c)"
			d="M150.51 9.433C115.55 16.2 84.225 33.19 59.758 57.15l.438.782c25.737 11.719 47.754 30.929 70.434 48.747L157.7 81.4c-17.64-17.783-31.24-37.201-7.19-71.967z"
			transform="matrix(-1 0 0 1 369.17 0)"
		/>
		<path
			fillRule="evenodd"
			fill="url(#d)"
			d="M54.665 62.37c-25.213 26.784-42.28 61.34-47.125 99.69 18.967-31.72 47.261-43.24 93-19.25l23.47-29.5c-15.33-13.829-47.642-37.702-69.345-50.94z"
			transform="matrix(-1 0 0 1 369.17 0)"
		/>
		<path
			fillRule="evenodd"
			fill="url(#e)"
			d="M60.321 136.15c-19.536.62-42.335 10.86-53.063 33.13l-.562 1.34c-.36 4.62-.563 9.29-.563 14 0 44.15 16.068 84.55 42.657 115.72-24.609-77.25 50.266-145.17 42.125-152.72-5.382-7.8-17.227-11.89-30.594-11.47z"
			transform="matrix(-1 0 0 1 369.17 0)"
		/>
		<path
			fillRule="evenodd"
			fill="url(#f)"
			d="M103.26 158.68c-1.63.03-3.333.36-5.127.97C74.876 177.9 32.332 265.72 57.196 309.5c.005 0-.005.02 0 .03 32.392 33.03 77.524 53.53 127.4 53.53 1.37 0 2.73 0 4.1-.03-53.74-38.84-42.04-193.68-85.44-204.35z"
			transform="matrix(-1 0 0 1 369.17 0)"
		/>
		<path
			fillRule="evenodd"
			fill="url(#g)"
			d="m129.41 119.31-23.46 28.9c57.19 41.9 32.86 187.63 96.28 214 44.87-4.41 84.89-25.47 113.78-56.9-57.83-69.47-117.64-135.6-186.6-186z"
			transform="matrix(-1 0 0 1 369.17 0)"
		/>
		<path
			fillRule="evenodd"
			fill="url(#h)"
			d="m163.13 86.808-25.28 25.282c83.76 71.01 136.76 130.49 182.35 187.19l.75.43c26.26-31.07 42.09-71.24 42.09-115.09 0-3.55-.11-7.07-.31-10.56-31.72-64-150.87-43.02-199.6-87.252z"
			transform="matrix(-1 0 0 1 369.17 0)"
		/>
		<path
			fillRule="evenodd"
			fill="url(#i)"
			d="m163.13 86.808-25.28 25.282c83.76 71.01 136.76 130.49 182.35 187.19l.75.43c26.26-31.07 42.09-71.24 42.09-115.09 0-3.55-.11-7.07-.31-10.56-31.72-64-150.87-43.02-199.6-87.252z"
			transform="matrix(-1 0 0 1 369.17 0)"
		/>
		<path
			fillRule="evenodd"
			fill="url(#j)"
			d="M268.66 37.745c-39.81.398-90.39 26.012-95.31 40.656 1.62 36.759 170.6 25.989 188.38 86.659l.25.03c-5.59-51.2-32.84-95.91-72.41-124.75-6.46-1.878-13.55-2.668-20.91-2.595z"
			transform="matrix(-1 0 0 1 369.17 0)"
		/>
		<path
			fillRule="evenodd"
			fill="url(#k)"
			d="M184.6 6.183c-8.95 0-17.77.662-26.37 1.937-26.55 28.735-12.38 54.55 1.87 62.438 12.17 8.663 43.55-45.58 122.22-35.219-28.08-18.426-61.65-29.156-97.72-29.156z"
			transform="matrix(-1 0 0 1 369.17 0)"
		/>
		<path
			fillRule="evenodd"
			fill="url(#l)"
			d="M150.51 9.433C115.55 16.2 84.225 33.19 59.758 57.15l.438.782c25.737 11.719 47.754 30.929 70.434 48.747L157.7 81.4c-17.64-17.783-31.24-37.201-7.19-71.967z"
			transform="matrix(-1 0 0 1 369.17 0)"
		/>
		<path
			fillRule="evenodd"
			fill="url(#m)"
			d="M54.665 62.37c-25.213 26.784-42.28 61.34-47.125 99.69 18.967-31.72 47.261-43.24 93-19.25l23.47-29.5c-15.33-13.829-47.642-37.702-69.345-50.94z"
			transform="matrix(-1 0 0 1 369.17 0)"
		/>
		<path
			fillRule="evenodd"
			fill="url(#n)"
			d="m129.41 119.31-23.46 28.9c57.19 41.9 32.86 187.63 96.28 214 44.87-4.41 84.89-25.47 113.78-56.9-57.83-69.47-117.64-135.6-186.6-186z"
			transform="matrix(-1 0 0 1 369.17 0)"
		/>
		<path
			fillRule="evenodd"
			fill="url(#o)"
			d="M103.26 158.68c-1.63.03-3.333.36-5.127.97C74.876 177.9 32.332 265.72 57.196 309.5c.005 0-.005.02 0 .03 32.392 33.03 77.524 53.53 127.4 53.53 1.37 0 2.73 0 4.1-.03-53.74-38.84-42.04-193.68-85.44-204.35z"
			transform="matrix(-1 0 0 1 369.17 0)"
		/>
		<path
			fillRule="evenodd"
			fill="url(#p)"
			d="M60.321 136.15c-19.536.62-42.335 10.86-53.063 33.13l-.562 1.34c-.36 4.62-.563 9.29-.563 14 0 44.15 16.068 84.55 42.657 115.72-24.609-77.25 50.266-145.17 42.125-152.72-5.382-7.8-17.227-11.89-30.594-11.47z"
			transform="matrix(-1 0 0 1 369.17 0)"
		/>
	</svg>
);

export const Anchor = (props) => {
	return (
		<svg
			color="#00092C"
			aria-hidden="true"
			data-prefix="fas"
			data-icon="anchor"
			className="prefix__svg-inline--fa prefix__fa-anchor prefix__fa-w-18"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 576 512"
			{...props}
		>
			<path
				fill={props.fill}
				d="M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z"
			/>
		</svg>
	);
};

export const Link = (props) => {
	return (
		<svg
			color="#00092C"
			aria-hidden="true"
			data-prefix="fas"
			data-icon="link"
			className="prefix__svg-inline--fa prefix__fa-link prefix__fa-w-16"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			{...props}
		>
			<path
				fill={props.fill}
				d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
			/>
		</svg>
	);
};

export const Design = (props) => {
	return (
		<svg
			color="#00092C"
			aria-hidden="true"
			data-prefix="fas"
			data-icon="palette"
			className="prefix__svg-inline--fa prefix__fa-palette prefix__fa-w-16"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			{...props}
		>
			<path
				fill={props.fill}
				d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
			/>
		</svg>
	);
};

export const Develop = (props) => {
	return (
		<svg
			color="#00092C"
			aria-hidden="true"
			data-prefix="fas"
			data-icon="laptop-code"
			className="prefix__svg-inline--fa prefix__fa-laptop-code prefix__fa-w-20"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 640 512"
			{...props}
		>
			<path
				fill={props.fill}
				d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
			/>
		</svg>
	);
};
