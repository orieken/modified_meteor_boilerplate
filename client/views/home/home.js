Template.home.helpers({
    episodes: function () {
        return Episode.where({}, {sort: {createdAt: -1}});
    }
});