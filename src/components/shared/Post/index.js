import React from 'react';
import './styles.scss';

const Post = props => {

    const {
        title,
        data_update,
        likes,
        description,
        user: { name },
    } = props.post;

    const date = new Date(data_update);
    const dateUpdate = date.toLocaleDateString();

    return (
        <div className="post">
            <i>{dateUpdate}</i>
            <span>{likes}</span>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Post;
