import React from 'react';
import './post-add-form.css';

const PostAddForm = ({onAdd}) =>{
    return (
        <div className="add-panel">
            <input type="text" placeholder="Что напишем?" className="form-control new-post-label"></input>
            <button type="submit" className="btn btn-submit" onClick={() => onAdd('Hello')}>Добавить</button>
        </div>
    )
}
export default PostAddForm;