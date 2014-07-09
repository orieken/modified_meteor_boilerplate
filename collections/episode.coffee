class @Episode extends Minimongoid
  @_collection: new Meteor.Collection('episodes')

  @slugify: (str) ->
    str.toLowerCase().replace(/[^\w ]+/g, "").replace(RegExp(" +", "g"), "-")