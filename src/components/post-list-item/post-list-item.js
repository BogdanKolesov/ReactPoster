import React, { Component } from 'react';
import './post-list-item.scss';

export default class PostListItem extends Component {
	render() {
		const {
			label,
			onDelete,
			onToggleImportant,
			onToggleLiked,
			important,
			like,
		} = this.props;
		let classNames = 'app-list-item';
		let classNamesHeart = 'icon-heart';
		if (important) {
			classNames += ' important';
		}

		if (like) {
			classNamesHeart += ' icon-heart--red';
		}
		return (
			<li className={classNames}>
				<span className='app-list-item-label'>{label}</span>
				<div className=''>
					<button
						type='button'
						className='btn btn-small btn-star'
						onClick={onToggleImportant}>
						<span className='icon-star'></span>
					</button>
					<button
						type='button'
						className='btn btn-small btn-trash'
						onClick={onDelete}>
						<span className='icon-trash'></span>
					</button>
					<span className={classNamesHeart} onClick={onToggleLiked}></span>
				</div>
			</li>
		);
	}
}
