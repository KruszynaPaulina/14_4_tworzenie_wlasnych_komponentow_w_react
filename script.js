var movies = [
  {
    id: 1,
    title: 'Harry Potter i kamień filozoficzny',
    desc: 'film o czarodzieju',
    img: 'http://ecsmedia.pl/c/harry-potter-tom-1-harry-potter-i-kamien-filozoficzny-b-iext43238206.jpg'
  },
  {
    id: 2,
    title: 'Harry Potter i komnata tajemnic',
    desc: 'film o czarodzieju',
    img: 'https://cdn.bonito.pl/zdjecia/5/76f3d3918576ab358f7971127dd3f1a5.jpg'
  },
  {
    id: 3,
    title: 'Harry Potter i więzień Azkabanu',
    desc: 'film o czarodzieju',
    img: 'http://ecsmedia.pl/c/harry-potter-tom-3-harry-potter-i-wiezien-azkabanu-b-iext43238210.jpg'
  },
  {
    id: 4,
    title: 'Harry Potter i czara ognia',
    desc: 'film o czarodzieju',
    img: 'http://ecsmedia.pl/c/harry-potter-tom-4-harry-potter-i-czara-ognia-b-iext44156449.jpg'
  }
];

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('li', {key:  this.props.movie.id, },
        React.createElement(MovieTitle, {title: this.props.movie.title}),
        React.createElement(MovieDescription, {desc: this.props.movie.desc}),
        React.createElement(MovieImage, {img: this.props.movie.img})
      )
    )
  },
});

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('h2', {}, this.props.title)
    )
  },
});

var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('p', {}, this.props.desc)
    )
  },
});

var MovieImage = React.createClass({
  propTypes: {
    img: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('img', {src: this.props.img})
    )
  },
});

var moviesElements = movies.map(function(movie, movie_id) {
  return (
    React.createElement(Movie, {movie: movie, key: movie_id})
  )
});

var MovieList = React.createClass({
  render: function () {
    return (
      React.createElement('ul', {}, moviesElements)
    )
  }
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MovieList, {})
  );

ReactDOM.render(element, document.getElementById('app'));

