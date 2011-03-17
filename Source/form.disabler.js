/*
---

name: Form.disabler

license: MIT-style license.

authors: Yorick Sijsling

requires: Element

provides: Element.disablerForm, Element.enableForm

---
*/

Element.implement({
    disableForm: function() {
        var fn = this.retrieve('disableForm_submitEvent') || function(e) { e.stop(); };
        this.store('disableForm_submitEvent', fn);
        this.addEvent('submit', fn);
        this.getElements('input[type=submit]').each(function(button) { button.set('disabled', true); });
    },
    enableForm: function() {
        var fn = this.retrieve('disableForm_submitEvent');
        this.removeEvent('submit', fn);
        this.getElements('input[type=submit]').each(function(button) { button.set('disabled', false); });
    }
});
