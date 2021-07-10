import React from 'react';
import './post-list-item.css';

const PostListItem = () => {
    return (
        <li className="app-list-item">
            <span className="app-list-item-label">
                Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!
            </span>
            <div className="">
                <button type="button" className="btn btn-small btn-star">
                <span className="icon-star"></span>
                </button>
                <button type="button" className="btn btn-small btn-trash">
                <span className="icon-trash"></span>
                </button>
                <span className="icon-heart"></span>
            </div>
        </li>
    )
}

export default PostListItem;