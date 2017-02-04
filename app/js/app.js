var my_news = [
  {
    author: "Sasha Pechkin",
    text: "В четверг четвертого числа..."
  },
  {
    author: "Просто Вася",
    text: "Считаю что долар должен стоить 35 тугриков."
  },
  {
    author: "Гость",
    text: "Бесплатно скачать все - Лучший софт у нас!"
  }
];

var News = React.createClass({
  render: function() {
    var data = this.props.data;
    var newsTemplate = data.map(function(item, index) {
      return (
        <div key={index}>
          <p className="news__author">{item.author}:</p>
          <p className="news__text">{item.text}</p>
        </div>
      )
    })
    return (
      <div className="news">
        {newsTemplate}
      </div>
    );
  }
});

var Comments = React.createClass({
  render: function() {
    return (
      <div className="comments">
        no comments here
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        Hi for everyone, I'm App's component
        <News data={my_news} /> {/* comments syntax */}
        <Comments />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


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
