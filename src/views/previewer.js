const p = require('puddles')

const icon = 'https://user-images.githubusercontent.com/888052/51040338-35dcb080-1585-11e9-9fa2-1767ddc68612.png'

const Previewer = (actions, state) => {
  const { image: { inputNext, submitForm } } = actions
  const { image: { current, error, next } } = state

  return p('div.previewer', [
    p('div.content', [
      p('h1.title', 'Image previewer'),

      p('div.dropbox', [
        p('div.aspect-ratio'),

        p('div.container', [
          current
            ? p('img.preview', { attrs: { src: current } })
            : p('img.placeholder', { attrs: { src: icon } })
        ])
      ]),

      p('form.form', {
        on: { submit: submitForm }
      }, [
        p('input.input.url', {
          attrs: {
            placeholder: 'Paste image url (ex: http://example.com/image.jpg)'
          },
          class: { error },
          on: { input: inputNext },
          props: { value: next }
        }),

        p('button.btn.submit', {
          attrs: {
            disabled: !next || error,
            type: 'submit'
          }
        }, 'Preview')
      ])
    ])
  ])
}

module.exports = Previewer
