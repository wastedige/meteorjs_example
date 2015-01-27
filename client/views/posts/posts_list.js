// We now use data populated by fixture.js on server
Template.postsList.helpers({
 posts: function() {
    return Posts.find();
 }
});