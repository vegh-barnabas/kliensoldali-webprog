import React from "react";
import ReactDOM from "react-dom";

// function Hello() {
//     return <h1>Hello 😁</h1>;
// }

function Hello() {
	const name = "Gezak";
	// return <h1>Hello {emoji}</h1>;
	if (name === "") {
    	return <h1>Nincs kit üdvözölni</h1>;
	} else {
		return <h1>Hello {name}</h1>;
	}

	// return name === "" 
	// ? <h1>Nincs kit üdvözölni</h1>
	// : <h1>Hello {name}!</h1>;
	// return result;
}

ReactDOM.render(<Hello />, document.getElementById("root"));

// ReactDOM.render(
//     <h1>Hello 😁</h1>,
//     document.getElementById('root')
//   );


// function Emoji(props) {
// 	console.log(props);
// 	return <h1>{ props.emoji }</h1>;
// }

// function Emoji({emoji: e}) {
// 	return <h1>{ e }</h1>;
// }

// ReactDOM.render(<Emoji emoji="😎" />, document.getElementById("root"));

// function Greetings(props) {
// 	console.log(props); // lesz 1 children attribútum is
// }

// function Greetings({ emoji, children }) {
// 	let val =
// 	<>
// 		<h1>{ emoji }</h1>
// 		{ children }
// 	</>;

// 	return val;
// }

// ReactDOM.render(
// 	<Greetings emoji="😎">
// 		<p>Üdv</p>
// 	</Greetings>,
// 	document.getElementById("root")
// );


function RandNum() {
	return <h1>A szám: { Math.random() }</h1>
}

setInterval(() => { 
	ReactDOM.render(
		<RandNum />,
		document.getElementById("root")
	);
}, 1000);