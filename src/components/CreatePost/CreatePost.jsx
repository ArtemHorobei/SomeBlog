import './CreatePost.scss';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Collapse } from 'reactstrap';
import React from 'react';

class CreatePost extends React.Component {
    constructor (props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }
    toggle () { this.setState({ collapse: !this.state.collapse }) }
    render () {
        return (
            <div className="create-post-wrap">
                <span onClick={this.toggle} className="button-create-post button-create-post-dynamic-hover">CREATE POST</span>
                <Collapse isOpen={this.state.collapse}>
                   <form className="create-post-form-wrap">
                       <div className="create-post-items">
                           <a className="cool-link">
                               <input type="text" className="create-post-input" placeholder="Title of post"/>
                           </a>
                           <a className="cool-link">
                               <input type="text" className="create-post-input" placeholder="Content"/>
                           </a>

                       </div>
                       <button type="submit">Create post</button>
                   </form>
                </Collapse>
            </div>
        )
    }
}

export default CreatePost;
