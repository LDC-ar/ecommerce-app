import React from "react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import ButtonBuy from "./components/body/ButtonBuy";
import ButtonGde from "./components/body/ButtonGde";
import ButtonInfo from "./components/body/ButtonInfo";
import ButtonInfoGde from "./components/body/ButtonInfoGde";
import "./App.css";

const textButton = {
  textoUno: "Pre-order",
  textoDos: "Buy" 
}

function App(props) {
	return (
		<div className="App">
			<Header />
			<Body>
      <ButtonBuy>{textButton.textoDos}</ButtonBuy>
      <ButtonGde>{textButton.textoUno}</ButtonGde>
      <ButtonBuy>{textButton.textoUno}</ButtonBuy>
      <ButtonGde>{textButton.textoDos}</ButtonGde>
      <ButtonInfo />
      <ButtonInfoGde />
      </Body>
			<Footer />
		</div>
	);
}

export default App;
