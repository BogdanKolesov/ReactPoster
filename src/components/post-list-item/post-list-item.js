import React, {Component} from 'react';
import './post-list-item.css';


export default class PostListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            important: false,
            like: false
        };
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
    }

    onImportant(){
        this.setState(({important}) => ({
            important: !important
        }))
    }

    onLike(){
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {
        const {label} = this.props;
        const {important, like} = this.state;
        let classNames = 'app-list-item'
        let classNamesHeart = 'icon-heart'
        if (important) {
            classNames += ' important';
        }

        if(like){
            classNamesHeart +=' icon-heart--red'
        }
        return (
            <li className={classNames}>
                <span className="app-list-item-label">
                    {label}
                </span>
                <div className="">
                    <button type="button" className="btn btn-small btn-star" onClick={this.onImportant}>
                        <span className="icon-star" ></span>
                    </button>
                    <button type="button" className="btn btn-small btn-trash">
                        <span className="icon-trash"></span>
                    </button>
                    <span className={classNamesHeart} onClick={this.onLike}></span>
                </div>
            </li>
        )
    }
}



