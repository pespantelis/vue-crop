var Vue2Crop = {}
var defaultOptions = {}
var events = [
  'create',
  'start',
  'move',
  'end',
  'focus',
  'blur',
  'change',
  'select',
  'remove'
]

const initJCrop = function (el, binding, vnode, last) {
  if (last && last.jcrop) {
    if (last.elm !== vnode.elm) {
      last.jcrop.destroy()
      last.jcrop = null
    } else {
      vnode.jcrop = last.jcrop
      last.jcrop = null
      return
    }
  }
  let event = binding.arg

  if ($.inArray(event, events) === -1) {
    console.warn('Invalid v-crop event: ' + event)
    return
  }

  if (!vnode.jcrop) {
    vnode.jcrop = $.Jcrop(el, defaultOptions)
  }
  let updatedOptions = {}
  if (event === 'select') {
    updatedOptions.onSelect = binding.value
  }
  vnode.jcrop.setOptions(updatedOptions)
  vnode.jcrop.release()
}

Vue2Crop.install = function (Vue) {
  Vue.directive('crop', {

    acceptStatement: true,

    inserted(el, binding, vnode) {
      initJCrop(el, binding, vnode, null)
    },

    update: initJCrop,

    unbind(el, binding, vnode) {
      if (!vnode.jcrop) {
        return
      }
      vnode.jcrop.ui.holder.off('crop' + binding.arg)
      vnode.jcrop.destroy()
      vnode.jcrop = null
    }
  })
}

Vue2Crop.setOptions = function (opts) {
  defaultOptions = opts
}
export default Vue2Crop
