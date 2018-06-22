Vue2Crop.setOptions({
  setSelect: [25, 25, 250, 250],
  bgOpacity: 0.6,
  allowResize: true,
  allowMove: true,
  allowSelect: true
})

new Vue({
  el: 'body',

  data: {
    coords: 'Try to move/resize the selection'
  },

  methods: {
    test: function(event, selection, coordinates) {
      this.coords = coordinates;
    }
  }
});
