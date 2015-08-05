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

        if (this.vm.jcrop) return

        $target = $(this.el)

        $target.Jcrop(options)

        this.vm.jcrop = $target.Jcrop('api')
      },

      update: function(callback) {
        this.vm.jcrop.container.on('crop' + this.arg, callback)
      },

      unbind: function() {
        this.vm.jcrop.container.off('crop' + this.arg)

        if (this._watcher.id != 1) return

        this.vm.jcrop.destroy()
        this.vm.jcrop = null
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
