App = Ember.Application.create();

App.Router.map(function() {
  this.resource('posts', function(){
    this.resource('post', { path: '/:post_id' });
  });
});

App.IndexRoute = Ember.Route.extend({
  beforeModel: function () {
    this.transitionTo('posts');
  }
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('post');
  }
});

App.ApplicationAdapter = DS.FixtureAdapter.extend({});

App.Post = DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  image: DS.attr()
});

App.Post.FIXTURES = [
  {
    id: 1,
    title: 'Balcony Chairs and Tables',
    description: 'A set of 4 chairs and 2 tables for the balcony.',
    image: '/img/balcony-set.jpg'
  },{
    id: 2,
    title: 'PS3 w/ 2 controllers',
    description: 'PS3 mid-2009 with 2 controllers and 15 games.',
    image: '/img/ps3.jpg'
  }
];
