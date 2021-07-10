import React from 'react';
import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import PostStatusFilter from '../post-status-filter/';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css'

const App = () => {
    const data = [
        {label:'Going to learn React', important: true},
        {label:'This is bad', important: false},
        {label:'FOOOOD!!!!!!!!!!!', important: false},
        {label:'Love Sonya!', important: false}
    ];

    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostAddForm />
            <PostList posts={data} />
            
        </div>
    )
}

export default App

