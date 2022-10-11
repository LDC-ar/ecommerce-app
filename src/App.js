import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import FooterDesktop from "./components/footer/FooterDesktop";

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
			{windowWidth < breakPoint ? <Footer/> : <FooterDesktop />}
		</div>
	);
}

export default App;
