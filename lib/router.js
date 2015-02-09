// Iron-router chapter in Discover Meteor book is outdated
// Use http://eventedmind.github.io/iron-router/#rendering-templates
// iron router can be installed with: "meteor add iron:router", meteorite is not needed



Router.map(function () {
    this.route('postsList', {
        path: '/',
        layoutTemplate: 'layout'
    });
    this.route('postPage', {
        path: '/posts/:_id',
        layoutTemplate: 'layout',
        data: function () {
            return Posts.findOne(this.params._id);
        }
    });

    this.route('/posts/:_id/edit', {
        name: 'postEdit',
        data: function () {
            return Posts.findOne(this.params._id);
        }
    });

    this.route('postSubmit', {
        path: '/submit'
    });
});

// A hook intercepts the routing process and potentially changes the action that the router takes. 
var requireLogin = function () {
    if (!Meteor.user()) {
        // Makes sure a loading screen anim is shown while we are waiting to see if the user has access or not.
        // But if it's undecided why is it inside (!Meteor.user) block ?
        if (Meteor.loggingIn())
            this.render(this.loadingTemplate);
        else
            this.render('accessDenied');

        this.stop();
    } else {
        // was not mentioned in the book!
        this.next();
    }
}
Router.before(requireLogin, {only: 'postSubmit'});
// Included in the book, but it breaks the app.
// Router.before(function() { clearErrors(); });