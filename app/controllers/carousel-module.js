import Ember from 'ember';

export default Ember.ArrayController.extend({

  hasImages: Ember.computed.gt('model.length', 0),

  totalImages: function() {
    return this.get('model.length');
  }.property('model.length')
});