# vue-niege

_Let it snow on your Vue applications!_

<p align="center">
  <img src="https://github.com/P3trur0/vue-niege/blob/master/static/logo.png?raw=true" alt="Vue Niege"/>
</p>

---

Single File Vue Component for _lazy_ snow storms generation. Come on, let's make your Vue applications joyful for Christmas time! 🎄 🎅

### Installation

You can install this component using npm:

```bash
npm install --save vue-niege
```

### Usage

Once installed, it is easy to use it. 

##### Importing the component

First, you need to import `vue-niege` in your files. You can do that in different ways.  
For example, it can be imported into a build process for use in full-fledged Vue applications:

```js
import Snow from 'vue-niege';

export default {
  components: {
    Snow,
  },
  // rest of the component
}
```

Alternatively, you can import `vue-niege` via `<script>` tag in the browser directly:

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-niege"></script>
```

##### Using the component

Once imported, you can use your component as follows:

```js
<Snow/>
```

This is the minimal setup to add a snowing canvas in your application.

### Properties

If you need to customize the snow behavior, you can use one of the following optional properties.

| **Properties** | **Default** | **Description**                                                                        | **Type**         |
|----------------|-------------|----------------------------------------------------------------------------------------|------------------|
| **active**         | `true`        | _provides dynamic display to the canvas: it is displayed only where this prop is true_ | Boolean          |
| **color**          | `#FFFFFF`     | _given a master HEX color, it defines a color pattern of four values for the snow. This property must be in expressed as HEX color (e.g.: `#050484`)_                                        | String           |
| **zIndex**         | `1`           | _defines the z-index position of the canvas in the DOM._                                                | Number           |
| **swing**          | `0`           | _applies a swing effect to each snowflake. By default no swinging is applied._         | Number           |
| **wind**           | `1`           | _defines the horizontal wind effect. The effect blows from right for values greater than 0, from left for values less than 0._ | Number           |
| **speed**          | `m`           | _defines the speed of the falling snow. The available values are `h` for high speed, `m` for medium speed, `l` for low speed._        | String           |

For example, the following:

```js
 <Snow 
 :active='true'  //e.g.: add a condition to display the canvas only if current date is in the Advent range.
 zIndex="2"
 :wind='1' 
 :swing='3' 
 speed="h" 
 color="#ffff00"/>
```

produces the following effect:

![Vue de toits](https://github.com/P3trur0/vue-niege/blob/master/static/vue-niege.gif?raw=true "Vue de toits")

### Contributing

This component can be improved both in features and performances. Please, help me in doing it better 🎅

### Credits

The inspiration for the component comes from [this](https://github.com/HermannBjorgvin/SnowJs) and [this](https://github.com/Fuxy526/vue-snowf), so their authors deserve big kudos.  
The inspiration for the component name comes from the above impressionist painting by [Gustave Caillebotte](https://en.wikipedia.org/wiki/Gustave_Caillebotte), titled **Vue de toits (Effet de neige)**.
