const functor = require('redux-functor')
const { mount } = require('puddles')

const { actions, reducers } = require('./ducks')
const middleware = [ functor ]
const root = document.getElementById('root')
const view = require('./views/previewer')

mount({ actions, middleware, reducers, root, view })
