import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
// import Footer from "./components/footer/Footer";
import ButtonBuy from "./components/main/ButtonBuy";
import ButtonOrder from "./components/main/ButtonOrder";
import ButtonInfo from "./components/main/ButtonInfo";
import ButtonInfoGde from "./components/main/ButtonInfoGde";
import { textButton } from "./components/helpers/data";

function App(props) {
	return (
		<div>
			<Header />

			<Main>
				<ButtonBuy>{textButton.textoDos}</ButtonBuy>
				<ButtonOrder>{textButton.textoUno}</ButtonOrder>
				<ButtonBuy>{textButton.textoUno}</ButtonBuy>
				<ButtonOrder>{textButton.textoDos}</ButtonOrder>
				<ButtonInfo />
				<ButtonInfoGde />
			</Main>

			{/* <Footer /> */}
		</div>
	);
}

export default App;
