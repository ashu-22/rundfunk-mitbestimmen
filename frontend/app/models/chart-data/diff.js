import DS from 'ember-data';

export default DS.Model.extend({
  series: DS.attr('series'),
  categories: DS.attr()
});
