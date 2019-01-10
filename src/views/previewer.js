const p = require('puddles')

const prevent = require('../lib/prevent')

const Previewer = (actions, state) =>
  p('div.previewer', [
    p('div.content', [
      p('h1.title', 'Image previewer'),

      p('div.placeholder', [
        p('div.aspect-ratio'),
        p('img.preview')
      ]),

      p('div.instructions', [
        'To preview your image, either drag-n-drop a local file into the space above,',
        p('br'),
        'or paste the image url into the input below.'
      ]),

      p('form.form', {
        on: { submit: prevent }
      }, [
        p('input.input.url'),

        p('button.btn.submit', {
          attrs: { type: 'submit' }
        }, 'Preview')
      ])
    ])
  ])

module.exports = Previewer
