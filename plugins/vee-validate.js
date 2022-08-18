import Vue from 'vue'
import { ValidationProvider, extend, ValidationObserver } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
  extend('minmax', {
    validate (value, args) {
      const length = value.length

      return length >= args.min && length <= args.max
    },
    params: ['min', 'max']
  })
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
