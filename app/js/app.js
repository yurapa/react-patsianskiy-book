// console.log(React);
// console.log(ReactDOM);

// ReactDOM.render(
//   React.createElement('h1', null, 'привет мир!'),
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <h1>Hello, next world!</h1>,
//   document.getElementById('root')
// );

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        Hi for everyone, I'm App's component
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
