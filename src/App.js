import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ButtonBuy from "./components/main/ButtonBuy";
import ButtonGde from "./components/main/ButtonGde";
import ButtonInfo from "./components/main/ButtonInfo";
import ButtonInfoGde from "./components/main/ButtonInfoGde";
import SectionCard from "./components/main/SectionCard";
import { textButton, sectionTitle } from "./components/helpers/data";

function App(props) {
	return (
		<div className="App">
			<Header />
			<Main>
				<ButtonBuy>{textButton.textoDos}</ButtonBuy>
				<ButtonGde>{textButton.textoUno}</ButtonGde>
				<ButtonBuy>{textButton.textoUno}</ButtonBuy>
				<ButtonGde>{textButton.textoDos}</ButtonGde>
				<ButtonInfo />
				<ButtonInfoGde />
				<SectionCard>
					<h3 className="section-title">{sectionTitle.title1}</h3>
				</SectionCard>
			</Main>

			<Footer />
		</div>
	);
}

export default App;
