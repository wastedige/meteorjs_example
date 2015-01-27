// We now use data populated by fixture.js
Template.postsList.helpers({
 posts: function() {
    return Posts.find();
 }
});