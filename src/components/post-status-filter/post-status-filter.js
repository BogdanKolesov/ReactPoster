import React, { Component } from 'react';
import './post-status-filter.css';

export default class PostStatusFilter extends Component {
	constructor(props) {
		super(props);
		this.buttons = [
			{ name: 'all', label: 'Все' },
			{ name: 'like', label: 'Понравилось' },
		];
	}

	render() {
		const buttons = this.buttons.map(({ name, label }) => {
			const active = this.props.filter === name;
			const clazz = active ? 'btn--active' : 'btn--passive';
			return (
				<button
					key={name}
					type='button'
					className={`btn ${clazz}`}
					onClick={() => this.props.onFilterSelect(name)}>
					{label}
				</button>
			);
		});
		return (
			<div className='btn-group'>
				{buttons}
				{/* <button type='button' className='btn btn--active'>
					Все
				</button>
				<button type='button' className='btn btn--passive'>
					Понравилось
				</button> */}
			</div>
		);
	}
}
