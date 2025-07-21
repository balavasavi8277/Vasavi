import React, { Component } from 'react';
import './Myapp.css';

class Myapp extends Component {
    render() {
        return (
            <div className='myInfo'>
                <img className='photo' src='/Screenshot 2025-02-16 161534.png' alt='photo' />
                <table>
                    <tr>
                        <td><label>Name</label></td>
                        <td><label>MSV Bala vasavi</label></td>
                    </tr>
                    <tr>
                        <td><label>Program</label></td>
                        <td><label>B.Tech. - CSE</label></td>
                    </tr>
                    <tr>
                        <td><label>Mobile No.</label></td>
                        <td><label>1234567890</label></td>
                    </tr>
                    <tr>
                        <td><label>Email ID</label></td>
                        <td><label>padmanaban.k@kluniversity.in</label></td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Myapp;