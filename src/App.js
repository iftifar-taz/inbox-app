import React, { Component } from "react";
import "./App.css";
import web3 from "./web3";
import inbox from "./inbox-contract";

class App extends Component {
	state = {
		currentMessage: "",
		updatedMessage: "",
		message: ""
	};

	setContractMessageState = message => {
		this.setState({ updatedMessage: message });
	};

	onSubmit = async event => {
		event.preventDefault();
		const accounts = await web3.eth.getAccounts();

		this.setState({
			message: "Waiting on transaction success..."
		});

		await inbox.methods.setMessage(this.state.updatedMessage).send({
            from: accounts[0]
        });

		this.setState({
			currentMessage: await inbox.methods.message().call(),
			message: "Transaction successful. Message changed!"
		});
	};

	componentDidMount = async () => {
		const message = await inbox.methods.message().call();
		this.setState({
			currentMessage: message,
			updatedMessage: message
		});
	};

	render = () => {
		return (
			<div>
				<h2>Inbox Contract!!</h2>
				<p>Currently stored message: {this.state.currentMessage}</p>
				<hr />
				<form onSubmit={this.onSubmit}>
					<h4>Want to update the message?</h4>
					<div>
						<label>Update message: </label>
						<input
							value={this.state.updatedMessage}
							onChange={event => this.setContractMessageState(event.target.value)}
						/>
					</div>
					<button>Enter</button>
				</form>
				<hr />
				<h1>{this.state.message}</h1>
			</div>
		);
	};
}

export default App;
