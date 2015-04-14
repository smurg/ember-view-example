import DS from 'ember-data';

var image = DS.Model.extend({
  url: DS.attr('string'),
  name: DS.attr('string')
});


image.reopenClass({
  FIXTURES: [{
    id: 0,
    name: 'Cataratas de iguazú',
    url: 'http://farm1.static.flickr.com/147/359188921_440566513e.jpg'
  }, {
    id: 1,
    name: 'paisajes japoneses',
    url: 'https://gianmarcos04.files.wordpress.com/2011/04/paisajes-de-japoneses-312254.jpg'
  }, {
    id: 2,
    name: 'cascadas',
    url: 'http://4.bp.blogspot.com/-r-ViLDKorUI/UCMU4CL_-bI/AAAAAAAACAY/B9lGCb1_mnw/s1600/cascadas-1.jpg'
  }, {
    id: 3,
    name: 'naturaleza',
    url: 'http://www.forodefotos.com/attachments/naturaleza/12983d1281113830-fotos-de-paisaje-fotos-de-paisaje.jpg'
  }, {
    id: 4,
    name: 'montaña',
    url: 'http://www.fotosyfondos.com/wp-content/uploads/2011/05/Paisajes-Bonitos.jpg'
  }, {
    id: 5,
    name: 'playas costa rica',
    url: 'http://costarica.pordescubrir.com/wp-content/uploads/2008/05/playas.jpg'
  }, {
    id: 6,
    name: 'glaciar perito moreno',
    url: 'http://www.vacacionesviaje.com/imagenes/c37-glaciar-perito-moreno.jpg'
  }]
});

export default image;