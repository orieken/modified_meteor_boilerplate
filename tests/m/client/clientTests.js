/**
 * Created by oscar on 7/3/14.
 */
describe("Eposide", function(){
    describe("slugify on creation", function(){
        it("creates a slug from the title", function(){
            Episode.create({title: 'Episode 15 - Google Ventures'})

            episide = Episode.first({title: 'Episode 15 - Google Ventures'})

            chai.assert.equal('episode-15-google-ventures', episode.slug);
            episode.destroy
        });
    });
});