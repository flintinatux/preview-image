const { mapObj, prop } = require('tinyfunk')

const ducks = {
  image: require('./image')
}

exports.actions  = mapObj(prop('actions'), ducks)
exports.reducers = mapObj(prop('reducer'), ducks)
