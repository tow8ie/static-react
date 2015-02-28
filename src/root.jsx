
var React = require('react');

var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;
var NotFound = Router.NotFound;

var Layout = require('./layout.jsx');
var Head = require('./head.jsx');
var Header = require('./header.jsx');

// Views
var Home = require('./home.jsx');
var About = require('./about.jsx');
var NotFoundPage = require('./not-found-page.jsx');


var Root = React.createClass({

  statics: {
    getRoutes: function() {
      return [
        { path: '/', handler: Home },
        { path: '/about', handler: About },
      ];
    },
    renderToString: function(props) {
      var html = '<!DOCTYPE html>';
      html += React.renderToString(<Root {...props} />);
      return html;
    },
  },


  render: function() {
    return (
      <Layout {...this.props}>
          <Header />
          <Locations path={this.props.path}>
            <Location path="/" handler={Home} />
            <Location path="/about" handler={About} />
            <NotFound handler={NotFoundPage} />
          </Locations>
      </Layout>
    )
  }

});

module.exports = Root;

