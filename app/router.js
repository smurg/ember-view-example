import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('carousel-module');
  this.resource('about');
  this.resource('home', {
    path: '/'
  });
});