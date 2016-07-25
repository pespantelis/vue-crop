;$(function() {

  if (!$.Jcrop) {
    console.error('Uncaught ReferenceError: Jcrop is not defined')
    return
  }

  var vueCrop = {}
  var options = {}
  var events = [
    'create',
    'start',
    'move',
    'end',
    'focus',
    'blur',
    'remove'
  ]

  vueCrop.install = function(Vue) {

    Vue.directive('crop', {

      acceptStatement: true,

      bind: function() {
        var event = this.arg

        if ($.inArray(event, events) == -1) {
          console.warn('Invalid v-crop event: ' + event)
          return
        }

        if (this.el.jcrop) return

        var $wrapper = $(this.el).wrap('<div/>').parent()

        $wrapper.width(this.el.width).height(this.el.height)

        this.el.jcrop = $.Jcrop.attach($wrapper, options)
      },

      update: function(callback) {
        this.el.jcrop.container.on('crop' + this.arg, callback)
      },

      unbind: function() {
        this.el.jcrop.container.off('crop' + this.arg)

        if (this._watcher.id != 1) return

        this.el.jcrop.destroy()
        this.el.jcrop = null
      }
    })
  }

  vueCrop.setOptions = function(opts) {
    options = opts
  }

  if (window.Vue) {
    window.VueCrop = vueCrop
    Vue.use(vueCrop)
  }

}());
