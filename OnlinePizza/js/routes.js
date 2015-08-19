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
