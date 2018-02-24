ServiceConfiguration.configurations.upsert(
  { service: 'github' },
  {
    $set: {
      clientId: Meteor.settings.oAuth.github.clientId,
      secret: Meteor.settings.oAuth.github.secret
    }
  }
)
