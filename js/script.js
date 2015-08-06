VueCrop.setOptions({
  setSelect: [25, 25, 250, 250],
  aspectRatio: 1,
  bgColor: '#2C7152'
});

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
