'use strict'

const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

Element.prototype.clearChildren = function() {
  // Future add-on: a switch to go between nodes and elements
	const arr = []
	while (this.firstChild) {
    arr.unshift(this.removeChild(this.lastChild))
	}
	return (arr.length) ? arr : null
}
