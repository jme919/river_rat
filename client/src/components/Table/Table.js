import React from 'react';
import "./Table.css";

const Table = props => (
    <section>
        <div id="pTable" className="container is-fluid">
            <div className="columns is-centered">
                <div className="column is-half">

                    <table className="table is-bordered is-striped is-hoverable is-narrow is-fullwidth">
                        <thead>
                            <tr>
                                <th>The James River Park System</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td><a href="parks/1">Pony Pasture</a></td>
                                <td><a href="/parks/2">Pipeline</a></td>
                            </tr>
                            <tr>
                                <td><a href="/parks/3">Manchester Climbing Wall</a></td>
                                <td><a href="/parks/4">T.Tyler Potterfield Bridge</a></td>
                            </tr>
                            <tr>
                                <td><a href="/parks/5">Huguenot Flatwater</a></td>
                                <td><a href="/parks/6">The Wetlands</a></td>
                            </tr>
                            <tr>
                                <td><a href="/parks/7">North Bank (Texas Beach) </a></td>
                                <td><a href="/parks/8">Ancarrow's Landing</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </section>


)



export default Table;