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

    this.route('postSubmit', {
        path: '/submit'
    });
});