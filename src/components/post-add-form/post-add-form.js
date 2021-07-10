import React from 'react';
import './post-add-form.css';

const PostAddForm = () =>{
    return (
        <form className="add-panel">
            <input type="text" placeholder="Что напишем?" className="form-control new-post-label"></input>
            <button type="submit" className="btn btn-submit">Добавить</button>
        </form>
    )
}
export default PostAddForm;