import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'

const App = () => {
    let avatarAddress = "https://i.pinimg.com/280x280_RS/8d/3e/cd/8d3ecd98d283dce2dd722a953018334d.jpg";
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" avatarAddress={avatarAddress} timeAgo="Today 5:00PM" post="Nice post" />
            <CommentDetail author="Alex" avatarAddress={avatarAddress} timeAgo="Today 7:00PM" post="Noce blog" />
            <CommentDetail author="Jane" avatarAddress={avatarAddress} timeAgo="Today 9:00PM" post="Awesome feed" />

        </div >
    )
}

ReactDOM.render(<App />, document.getElementById('root'));