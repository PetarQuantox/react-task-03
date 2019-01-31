import React, { Component } from 'react';

import Input from './components/Input';
import Button from './components/Button';
import List from './components/list/List';

class App extends Component {
	state = {
		items: ['task 1'],
		input: '',
		error: ''
	};

	hangleClick = e => {
		e.preventDefault();

		if (this.state.input === '') {
			this.setState({
				error: 'Fields can not  be empty!'
			});

			setTimeout(() => this.setState({ error: '' }), 2000);
			return false;
		} else {
			this.setState({
				items: [...this.state.items, this.state.input],
				input: ''
			});
		}
	};

	handleChange = e => {
		this.setState({
			input: e.target.value
		});
	};

	handleCompleted = item => {
		this.setState({
			items: this.state.items.filter(el => el !== item)
		});
	};

	render() {
		return (
			<div className="to-do">
				{this.state.error !== '' ? (
					<div className="error">{this.state.error}</div>
				) : null}
				<form className="to-do__form">
					<Input handleChange={this.handleChange} input={this.state.input} />
					<Button handleClick={this.hangleClick} />
					<List
						items={this.state.items}
						handleCompleted={this.handleCompleted}
					/>
				</form>
			</div>
		);
	}
}

export default App;
