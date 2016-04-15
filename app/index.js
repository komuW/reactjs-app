var React = require('react');
var ReactDom = require('react-dom');


var my_comp = React.createClass({
    render: function(){
    return (
      <div>
        Hello World!
      </div>
    );
  }
});

ReactDom.render(
    <my_comp />,
    document.getElementById('app')
);
