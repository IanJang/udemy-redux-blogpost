import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { createPost } from '../actions/index';

class PostsNew extends Component {
    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create a new Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <Field name="title" component="input" type="text" className="form-control"></Field>
                </div>

                <div className="form-group">
                    <label>Catogories</label>
                    <Field name="categories" component="input" type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Content</label>
                    <Field name="content" component="textarea" className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(connect(null, { createPost })(PostsNew));
