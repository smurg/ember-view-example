import Ember from 'ember';
import CarouselMixin from "ember-view-example/mixins/views/carousel";

export default Ember.View.extend(CarouselMixin, {
  tagName: 'div',
  classNames: ['container-fluid'],

  didInsertElement: function() {
    this.set('carouselUserParams', {
      arrows: true,
      autoplay: false,
      infinite: true,
      slidesToShow: 1
    });
  }
});