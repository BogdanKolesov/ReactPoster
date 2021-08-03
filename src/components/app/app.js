import React, {Component} from "react";
import AppHeader from "../app-header/";
import SearchPanel from "../search-panel/";
import PostStatusFilter from "../post-status-filter/";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css";



export default class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			data : [
				{ label: "Going to learn React", important: true, id: 1 },
				{ label: "This is bad", important: false, id: 2},
				{ label: "FOOOOD!!!!!!!!!!!", important: false, id:3 },
				{ label: "Love Sonya!", important: false, id:4 },
			]
		};
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
		
		this.maxId = 4;
	}
	deleteItem(id){
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id)
			
			const before = data.slice(0, index);
			const after = data.slice(index + 1);

			const newArr = [...before, ...after];

			return {
				data: newArr
			}

		});
	}

	addItem(body) {
		const newItem = {
			label: body,
			important: false,
			id: this.maxId++	
			}
			this.setState(({data})=>{
				const newArr = [...data, newItem];
				return{
					data: newArr
				}
			})
	}


render(){
		return (
		<div className='app'>
			<AppHeader />
			<div className='search-panel'>
				<SearchPanel />
				<PostStatusFilter />
			</div>
			<PostAddForm onAdd={this.addItem}/>
			<PostList posts={this.state.data} onDelete={this.deleteItem}/>
		</div>
	);
}
};
