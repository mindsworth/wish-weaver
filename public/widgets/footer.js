(function () {
  var DEFAULTS = {
    src: (window.WISHWEAVER_WIDGET_ORIGIN || window.location.origin) + '/embed/footer',
    height: 360,
  }

  function createIframe(options) {
    var opts = Object.assign({}, DEFAULTS, options || {})
    var iframe = document.createElement('iframe')
    iframe.src = opts.src
    iframe.title = 'WishWeaver Footer Widget'
    iframe.style.width = '100%'
    iframe.style.height = 'auto'
    // iframe.style.height = (opts.height || DEFAULTS.height) + 'px'
    iframe.style.border = '0'
    iframe.style.display = 'block'
    iframe.setAttribute('loading', 'lazy')
    iframe.setAttribute('referrerpolicy', 'no-referrer')
    return iframe
  }

  function mount(selectorOrEl, options) {
    var el = typeof selectorOrEl === 'string' ? document.querySelector(selectorOrEl) : selectorOrEl
    if (!el) return
    var iframe = createIframe(options)
    el.innerHTML = ''
    el.appendChild(iframe)
    return iframe
  }

  window.WishWeaverFooterWidget = {
    mount: mount,
    createIframe: createIframe,
  }
})()


