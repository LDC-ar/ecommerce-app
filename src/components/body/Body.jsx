import React from "react";
import ButtonBuy from "./ButtonBuy";


function Body(props) {
	return (
		<div className="container-body">
      {props.children}
			<h1>Body</h1>
      <ButtonBuy>{}</ButtonBuy>
		</div>
	);
}

export default Body;
