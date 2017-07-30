(function (_window) {
    'use strict';
    var $, jQuery, React, Home, About, App;

    $ = jQuery = require('jquery');
    React = require('react');
    Home = require('./components/homePage');
    About = require('./components/about/aboutPage');
    App = React.createClass({
        render: function () {
            var Child;
            switch (this.props.route) {
                case 'about':
                    Child = About;
                    break;
                default:
                    Child = Home;
                    break;
            }
            return (
                <div>
                    <Child/>
                </div>
            );
        }
    });

    function render() {
        var route = _window.location.hash.substr(1);
        React.render(<App route={route} />, document.getElementById('app'));
    }

    _window.addEventListener('hashchange', render);
    render();

}(window));
