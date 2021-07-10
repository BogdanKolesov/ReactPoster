import React from 'react';
import './post-status-filter.css';

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn--active">Все</button>
            <button type="button"  className="btn btn--passive">Понравилось</button>
        </div>
    )
}

export default PostStatusFilter;