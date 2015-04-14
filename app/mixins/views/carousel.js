import Ember from 'ember';

export
default Ember.Mixin.create({

  carouselUserParams: null,
  carouselContainerSelector: null,

  //Ember.View hook:
  //Called when the element of the view has been inserted into the DOM or after the view was re-rendered.
  didInsertElement: function() {
    this.initCarousel();
    /*  
  The afterRender contains jobs meant to be run after all previously scheduled render tasks are complete.
  This is often good for 3rd-party DOM manipulation libraries, 
  that should only be run after an entire tree of DOM has been updated */

  },

  parameters: function() {
    return $.extend({
      dots: true,
      arrows: false,
      autoplay: false
    }, this.get('carouselUserParams'));
  },

  getCarouselElement: function() {
    if (this.get('carouselContainerSelector')) {
      return $(this.get('carouselContainerSelector'));
    } else {
      return $("#" + this.elementId + " .carousel-container");
    }
  }.observes('carouselContainerSelector'),

  initCarousel: function() {
    this.getCarouselElement().slick(this.parameters());
  }.observes('carouselUserParams'),

  reInit: function() {
    var slickContainer = this.getCarouselElement();
    if (slickContainer.getSlick()) {
      slickContainer.unslick();
      slickContainer.slick(this.parameters());
    }
  }.observes('carouselUserParams')
});