const p = require('puddles')

const Previewer = (actions, state) => {
  const { image: { inputNext, submitForm } } = actions
  const { image: { error, next } } = state

  return p('div.previewer', [
    p('div.content', [
      p('h1.title', 'Image previewer'),

      p('div.placeholder', [
        p('div.aspect-ratio'),
        p('img.preview')
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
