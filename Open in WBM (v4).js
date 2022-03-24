javascript: (function() {
  post('https://example.com', { foo: 'bar' })
  function post (url, formData) {
    const h = (tag, props) => Object.assign(document.createElement(tag), props)
    const form = h('form', { action: url, method: 'post', hidden: true })
    for (const [name, value] of Object.entries(formData)) {
      form.appendChild(h('input', { name, value }))
    }
    document.body.appendChild(form)
    form.submit()
  }
})();