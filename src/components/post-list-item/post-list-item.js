import React from 'react';
import PostList from '../post-list/post-list';

const PostListItem = () =>{
    return(
        <li className="app-list-item">
            <span className="app-list-item-label">
                Hello!
            </span>
            <div>
                <button type="button" className="btn-star">
                    <i>*</i>
                </button>
                <button type="button" className="btn-trash">
                    <i>-</i>
                </button>
                <i>Liked</i>
            </div>
        </li>
    )
}

export default PostListItem;