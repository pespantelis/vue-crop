# VueCrop

> Crop events plugin for Vue.js 1.0

This is a directive for Jcrop 2.0.0.

See a live demo [here](http://pespantelis.github.io/vue-crop/).

## Usage

### Include

You can include it with a `<script>` tag when you have Vue itself included globally. It will automatically install itself, and will add a global `VueCrop`.

### Use in templates

Then you can do this:

``` html
<img src="pic.jpg" width="600" height="400" v-crop:start="cropStart"/>
```
> You should specify both the `height` and `width` attributes

See [Jcrop documentation](http://jcrop.org/doc/events) for all available events.

### Set options

``` js
VueCrop.setOptions({
  setSelect: [10, 10, 100, 100],
  aspectRatio: 1,
  bgColor: 'red'
})
```

See [Jcrop documentation](http://jcrop.org/doc/options) for all available options.

## License

VueCrop is released under the MIT Licence. See the bundled LICENSE file for details.
