// Iron-router chapter in Discover Meteor book is outdated
// Use http://eventedmind.github.io/iron-router/#rendering-templates
// iron router can be installed with: "meteor add iron:router", meteorite is not needed

// Router.map is apparently obsolete

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { 
    return [Meteor.subscribe('posts'), Meteor.subscribe('comments')];
  }
});

Router.route('/', {name: 'postsList'});

Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/posts/:_id/edit', {
  name: 'postEdit',
  data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/submit', {name: 'postSubmit'});


// A hook intercepts the routing process and potentially changes the action that the router takes. 
var requireLogin = function () {
    // Makes sure a loading screen anim is shown while we are waiting to see if the user has access or not.
    // But if it's undecided why is it inside (!Meteor.user) block ?
    if (!Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
}

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});

