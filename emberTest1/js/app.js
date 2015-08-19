App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  this.route('about');
  this.route('testimonial');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue','orange','purple'];
  }
});

App.AboutRoute = Ember.Route.extend({
  
});

App.TestimonialRoute = Ember.Route.extend({

});

App.IndexController = Ember.ArrayController.extend({
	sortedModel: function() {
		return this.get('model').sort();
	}.property('@each')
});