// Iron-router chapter in Discover Meteor book is outdated
// Use http://eventedmind.github.io/iron-router/#rendering-templates
// iron router can be installed with: "meteor add iron:router", meteorite is not needed

Router.route('/', function () {
    this.layout('layout'); // refers to layout.html
    this.render('postsList');
});