const { action, handle } = require('puddles')
const dragDrop = require('drag-drop')

const {
  assoc, compose, concat, flip, juxt, map
} = require('tinyfunk')

const prevent   = require('../lib/prevent')
const targetVal = require('../lib/targetVal')
const trim      = require('../lib/trim')

const isUrl = /https?:\/\//i

const ns =
  concat('preview-image/image/')

const SET_CURRENT  = ns('SET_CURRENT')
const SET_DRAGGING = ns('SET_DRAGGING')
const SET_ERROR    = ns('SET_ERROR')
const SET_NEXT     = ns('SET_NEXT')

const init = {
  current: '',
  dragging: false,
  error: false,
  next: ''
}

const setCurrent =
  flip(assoc('current'))

const setDragging =
  flip(assoc('dragging'))

const setError =
  flip(assoc('error'))

const setNext =
  flip(assoc('next'))

exports.reducer = handle(init, {
  [ SET_CURRENT  ]: setCurrent,
  [ SET_DRAGGING ]: setDragging,
  [ SET_ERROR    ]: setError,
  [ SET_NEXT     ]: setNext
})

const dropFile = file => dispatch => {
  const reader = new FileReader()

  reader.addEventListener('load', () =>
    dispatch(action(SET_CURRENT, reader.result))
  )

  reader.readAsDataURL(file)
}

const attachDragDrop = vnode => dispatch =>
  dragDrop(vnode.elm, compose(dispatch, map(dropFile)))

const validate = next =>
  action(SET_ERROR, (next && !isUrl.test(next)) ? 'bad url' : false)

const putNext =
  juxt([ action(SET_NEXT), validate ])

const inputNext =
  compose(putNext, trim, targetVal)

const putUrl = () => (dispatch, getState) => {
  const { image: { next } } = getState()
  if (next) dispatch(action(SET_CURRENT, next))
}

const submitForm =
  compose(putUrl, prevent)

exports.actions = {
  attachDragDrop,
  inputNext,
  submitForm
}
