import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Post from '../../shared/Post';

import { getLastPosts } from '../../shared/handlers/postApiService';

import './styles.scss';

const Home = (props) => {

    console.log('RENDER HOME COMPONENT')

    useEffect(() => {
        getLastPosts(3).then(data => {
            props.setLastPosts(data);
        });
    }, []);

    return (
        <div className="posts">
            <h1>Last posts</h1>
            {props.lastPosts.map(post => <Post key={post.id} post={post} />)}
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setLastPosts: posts => dispatch({type: 'SET_LAST_POSTS', posts})
    }
}

const mapStateToProps = state => {
    return {
       lastPosts: state.home.lastPosts,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
