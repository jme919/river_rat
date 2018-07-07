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
                        <td><a href="">Pony Pasture</a></td>
                        <td><a href="">Pipeline</a></td>
                    </tr>
                    <tr>
                            <td><a href="">Manchester Climbing Wall</a></td>
                            <td><a href="">T.Tyler Potterfield Bridge</a></td>
                    </tr>
                    <tr>
                            <td><a href="">Huguenot Flatwater</a></td>
                        <td><a href="">The Wetlands</a></td>
                    </tr>
                    <tr>
                        <td><a href="">North Bank (Texas Beach) </a></td>
                        <td><a href="">Ancarrow's Landing</a></td>
                    </tr>
                </tbody>
                    </table>
            </div>
        </div>

    </div>
</section>


)



export default Table;