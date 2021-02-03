/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatarAddress}></img>
            </a>
            <div className="content">
                <a hre="/" className="author">  {props.author} </a>
                <div className="metadata">
                    <span className="date"> {props.timeAgo}</span>
                </div>
                <div className="text"> {props.post}</div>
            </div>
        </div>
    )
}
export default CommentDetail;
