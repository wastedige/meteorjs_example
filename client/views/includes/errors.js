Template.errors.helpers({
    errors: function () {
        return Errors.find();
    }
});

// A template's rendered callback triggers every time it's rendered in the browser.

Template.error.rendered = function() {
  var error = this.data;
  Meteor.setTimeout(function () {
    Errors.remove(error._id);
  }, 3000);
};