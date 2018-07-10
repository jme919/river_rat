import React from "react";
import "./Comments.css";

const Comments = props => (
    <section>
        <div id="comments" className="container is-fluid">
            <div className="columns">
                <div className="column">

                    <div className="field">
                        <label className="label is-text is-success">Discussion</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success" type="text" placeholder="Text input" value="Username" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>

                    </div>
                    <div className="field">
                        <div className="control is-large">
                            <textarea className="textarea is-success" type="text" placeholder="Leave a tip, info, or a review of this park!"></textarea>

                        </div>
                    </div>
                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button  is-success">Submit</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
)

export default Comments