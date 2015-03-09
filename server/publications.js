// This file is needed for non-development envs. in which autopublishing is off
// turn off auto publication: meteor remove autopublish

Meteor.publish('posts', function () {
    return Posts.find();
});

Meteor.publish('comments', function(postId) {
  return Comments.find({postId: postId});
});