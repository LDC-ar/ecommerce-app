import React from "react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import ButtonBuy from "./components/body/ButtonBuy";
import ButtonGde from "./components/body/ButtonGde";
import ButtonInfo from "./components/body/ButtonInfo";
import ButtonInfoGde from "./components/body/ButtonInfoGde";
import SectionCard from "./components/body/SectionCard";


const textButton = {
  textoUno: "Pre-order",
  textoDos: "Buy" 
}

const sectionTitle = {
  title1: "Which iPhone is right for you?",
  title2: "Which MacBook is right for you?",
  title3: "Which iPad is right for you?"
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
      <SectionCard>
        <h3 className="section-title">{sectionTitle.title1}</h3>
      </SectionCard>
      </Body>

			<Footer />
		</div>
	);
}

export default App;
