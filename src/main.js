(function (_window) {
    'use strict';
    var $, jQuery, React, Header, Home, About, Authors, App;

    $ = jQuery = require('jquery');
    React = require('react');
    Header = require('./components/common/header');
    Home = require('./components/homePage');
    About = require('./components/about/aboutPage');
    Authors = require('./components/authors/authorPage.js');

    App = React.createClass({
        render: function () {
            var Child;
            switch (this.props.route) {
                case 'about':
                    Child = About;
                    break;
                case 'authors':
                    Child = Authors;
                    break;
                default:
                    Child = Home;
                    break;
            }
            return (
                <div>
                    <Header/>
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
