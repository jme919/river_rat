import React from 'react';
import "./CommentsBox.css";

const CommentsBox = props => (
    <section>
        <div id="commentsBox" className="container is-fluid ">
            <div className="columns">
                <div className="column">
                    <span class="icon is-medium">
                        <span class="fa-stack">
                            <i class="fas fa-circle fa-stack-2x"></i>
                            <i class="fas fa-user-circle fa-stack-1x fa-inverse"></i>
                        </span>
                    </span> 
                     {props.children}
                </div>
            </div>
        </div>
    </section>



)



export default CommentsBox;