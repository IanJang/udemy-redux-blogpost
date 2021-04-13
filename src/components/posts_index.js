import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }
    renter() {
        return (
            <div>List of blog posts</div>
        );
    }
}

export default connect(null, { fetchPosts: fetchPosts })(PostIndex);
