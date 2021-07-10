import React from 'react';
import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import PostStatusFilter from '../post-status-filter/';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css'

const App = () => {
    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostAddForm />
            <PostList />
            
        </div>
    )
}

export default App

