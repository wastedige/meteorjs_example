Template.postSubmit.events({
    'submit form': function (e) {
        // we preventDefault on the event argument to our handler to make sure 
        // the browser doesn't go ahead and try to submit the form
        e.preventDefault();
        var post = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val(),
            message: $(e.target).find('[name=message]').val()
        }
        post._id = Posts.insert(post);
        // Router's go() function will use id to construct a URL for us to browse to.
        // Router.go('postPage', post);
    }
});