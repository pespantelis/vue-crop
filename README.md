# Vue2Crop

> Crop events plugin for Vue.js 2.0
> Based on [VueCrop](https://github.com/pespantelis/vue-crop) and [Jcrop](http://deepliquid.com/content/Jcrop.html)

This is a directive for Jcrop v0.9.12.

See a live demo [here](http://pespantelis.github.io/vue-crop/), this demo is for Vue.js 1.0

## Usage

Firstly, you have to include `jQuery` and `Jcrop` in you html template.

### Direct include

You can include it with a `<script>` tag when you have Vue itself included globally. It will automatically install itself, and will add a global `Vue2Crop`.


### Install via npm

Available through npm as `vue2-crop`.
```
npm install --save vue2-crop
```

## Use in templates

Use this directive in `main.js`

``` js
import Vue2Crop from 'vue2-crop'

Vue2Crop.setOptions({
  bgOpacity: 0.6,
  allowResize: true,
  allowMove: true,
  allowSelect: true
})
Vue.use(Vue2Crop)
```

Then you can do this:

``` html
<img src="pic.jpg" width="600" height="400" v-crop:select="oncrop"/>
```
> You should specify both the `height` and `width` attributes

See [Jcrop documentation](http://deepliquid.com/content/Jcrop_Manual.html#Event_Handlers) for all available events.

## Set options

``` js
Vue2Crop.setOptions({
  bgOpacity: 0.6,
  allowResize: true,
  allowMove: true,
  allowSelect: true
})
```

See [Jcrop documentation](http://deepliquid.com/content/Jcrop_Manual.html#Setting_Options) for all available options.

## License

Vue2Crop is released under the MIT Licence. See the bundled LICENSE file for details.
