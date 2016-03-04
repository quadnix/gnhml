Template.home.helpers({
    'schedule_context': function() {
        return {
            db: Competitions,
            selector: {},
            sortable: false,
            tracking: [{
                field: 'date',
                title: 'Competition Date',
                func: function(value, ctx) {
                    return String(value).substring(0, 15);
                }
            }],
            hoverable: true
        }
    },
    tweets: function() {
        return Tweets.find();
    }
});
