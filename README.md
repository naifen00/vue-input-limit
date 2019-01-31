# vue-input-limit
Vue input limit directive.

## Installation

### yarn | npm
```
yarn add vue-input-limit
or
$ npm install vue-input-limit -S
```

### CDN

```
<script src="https://unpkg.com/vue-input-limit"></script>  
```


## Example

```vue
<template>
  <input type="text" v-model="value" v-input-limit="/[^\d.]/">
  
  <input type="text" v-model="carnum" v-input-limit="toUpperCase">
</template>

<script>
import inputLimit from 'vue-input-limit';

export default {
    directives: {
        inputLimit,
    },
    data () {
        return {
            value: '',
            carnum: '',
        };
    },
    methods:{
        toUpperCase: v=> v.toUpperCase(),
    },
};
</script>

```

## Support

* element-ui
* vue-beauty

