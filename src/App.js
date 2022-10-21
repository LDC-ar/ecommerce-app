import React, { useState, useEffect } from "react";
import FooterDesktop from "./components/footer/FooterDesktop";
import FooterMobile from "./components/footer/FooterMobile";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
	///////////////////////////////////////////////////////////////////////////////
	////////////Este event listener es para saber el ancho de la pantalla//////////
	///////////////////////////////////////////////////////////////////////////////
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const breakPoint = 768;

	useEffect(() => {
		function watchWidth() {
			setWindowWidth(window.innerWidth);
		}
		window.addEventListener("resize", watchWidth);

		return () => window.removeEventListener("resize", watchWidth);
	}, [windowWidth]);
	///////////////////////////////////////////////////////////////////////////////

	return (
		<div>
			<Header />
			<Main windowWidth={windowWidth} breakPoint={breakPoint} />
			{windowWidth < breakPoint ? <FooterMobile /> : <FooterDesktop />}
		</div>
	);
}

export default App;
