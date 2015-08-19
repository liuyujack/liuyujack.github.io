App.IndexRoute = Ember.Route.extend({
  start:4,
  end: 8,
  model: function() {
    return this.store.find('Pizza', {
      start: this.get('start'),
      end: this.get('end')
    });
  }
});

App.PizzazRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('Pizza');
  }
});

App.PizzaRoute = Ember.Route.extend({
  model: function(params){
    return this.store.find('Pizza', params.pizza_id);
  }
});
