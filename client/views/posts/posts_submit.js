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
        
        // The Meteor.call function calls a Method named by its first argument. 
        // You can provide arguments to the call (in this case, the post object 
        // we constructed from the form), and finally attach a callback, which 
        // will execute when the server-side Method is done
        Meteor.call('post', post, function(error, result) 
          { if (error)
              return alert(error.reason);
                                                       
        // Router's go() function will use id to construct a URL for us to browse to.
        Router.go('postPage', {_id: result._id});
        });
    }
});