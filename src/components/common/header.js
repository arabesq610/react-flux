'use strict';

var React, Header;

React = require('react');

Header = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/#about">About</a></li>
                        <li><a href="/#authors">Authors</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;