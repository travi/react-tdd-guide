'use strict';

var React = require('react');

module.exports = React.createClass({
    render: function () {
        return (
            <button type='button' onClick={this.props.buttonSelected}/>
        );
    }
});
