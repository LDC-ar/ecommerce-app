import React, { useState, useEffect } from "react";
import FooterDesktop from "./components/footer/FooterDesktop";
import FooterMobile from "./components/footer/FooterMobile";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const breakPoint = 768;

	useEffect(() => {
		function watchWidth() {
			console.log("Cambiando el ancho");
			setWindowWidth(window.innerWidth);
		}
		window.addEventListener("resize", watchWidth);

		return () => window.removeEventListener("resize", watchWidth);
	}, [windowWidth]);

	return (
		<div>
			<Header />
			<Main />
			{windowWidth < breakPoint ? <FooterMobile /> : <FooterDesktop />}
		</div>
	);
}

export default App;
