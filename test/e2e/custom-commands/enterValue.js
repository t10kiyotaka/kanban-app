exports.command = function (selector, value) {
  return this.clearValue(selector)
    .setValue(selector, value)
    .trigger(selector, 'kyeup', 13)
}