const { mount } = require('puddles')

const view = require('./views/previewer')

const root = document.getElementById('root')

mount({ root, view })
