/* globals
  URL
*/

import { Template } from 'meteor/templating'
import { Random } from 'meteor/random'

Template.inputBinary.onCreated(function () {
  this.uid = Random.secret()
})

Template.inputBinary.onRendered(function () {
  if (!this.$('input.inputBinary').val() && this.data.default) {
    this.$('input.inputBinary').val(this.data.default).trigger('change', this.data.default)
  }
})

Template.inputBinary.helpers({
  uid () {
    return Template.instance().uid
  }
})

Template.inputBinary.events({
  'change input[type=file]': function (event, instance) {
    var hidden = instance.$('input.inputBinary')

    var file = event.currentTarget.files[0]

    if (!file) {
      hidden.val(Template.currentData().default)
      return hidden.trigger('change')
    }

    hidden.val(URL.createObjectURL(file))
    hidden.data('file', file)
    return hidden.trigger('change', URL.createObjectURL(file), file)
  }
})
