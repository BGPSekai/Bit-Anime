import { Meteor } from 'meteor/meteor'

if (Meteor.isServer) {
  console.log('run on server')
  Meteor.startup(() => {
  // code to run on server at startup
  })
}
