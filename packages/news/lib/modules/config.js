import Users from 'meteor/vulcan:users'

Users.avatar.setOptions({
  gravatarDefault: 'mm',
  defaultImageUrl:
    'http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&f=y'
})

Accounts.ui.config({
  requestPermissions: {
    github: ['read:user', 'user:email']
  }
})
