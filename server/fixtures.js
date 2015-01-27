if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'Fixture.js test: Telescope',
        author: 'Sacha Greif',
        url: 'http://sachagreif.com/introducing-telescope/'
    });
    Posts.insert({
        title: 'Fixture.js test: Meteor',
        author: 'Tom Coleman',
        url: 'http://meteor.com'
    });
    Posts.insert({
        title: 'Fixture.js test: The Meteor Book',
        author: 'Tom Coleman',
        url: 'http://themeteorbook.com'
    });
}