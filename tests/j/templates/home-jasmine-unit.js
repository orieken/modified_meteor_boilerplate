(function () {
    describe("Template.home", function() {
        it("should return episodes sorted by their createdAt descending", function(){
            episodes = {}
            Episode.where = function(selector, options) {
                expect(options.sort.createdAt).toBe(-1)
                return episodes
            }
            expect(Template.home.episodes()).toBe(episodes)
        });
    });
})();