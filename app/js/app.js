App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return [{
      title: 'Balcony Chairs and Tables',
      description: 'A set of 4 chairs and 2 tables for the balcony.'
    },{
      title: 'Balcony Chairs and Tables',
      description: 'A set of 4 chairs and 2 tables for the balcony.'
    }];
  }
});
