// Iron-router chapter in Discover Meteor book is outdated
// Use http://eventedmind.github.io/iron-router/#rendering-templates
// iron router can be installed with: "meteor add iron:router", meteorite is not needed

Router.route('/', function () {
    this.layout('layout'); // refers to layout.html
    this.render('postsList');
});

Router.route('/post/:_id', function () {
    this.layout('layout');
    this.render('postPage', {
        data: function () {
            return Posts.findOne(this.params._id); 
            // won't work with the current DB because _id is not numerical
        }
    });
});