import React from 'react';

const PostAddForm = () =>{
    return (
        <form className="bottom-panel">
            <input type="text" placeholder="Что напишем?" className="form-control new-post-label"></input>
            <button type="submit" className="btn">Добавить</button>
        </form>
    )
}
export default PostAddForm;