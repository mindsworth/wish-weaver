(function () {
  var DEFAULTS = {
    src: (window.WISHWEAVER_WIDGET_ORIGIN || window.location.origin) + '/embed/header',
    height: 80,
  }

  function createIframe(options) {
    var opts = Object.assign({}, DEFAULTS, options || {})
    var iframe = document.createElement('iframe')
    iframe.src = opts.src
    iframe.title = 'WishWeaver Header Widget'
    iframe.style.width = '100%'
    // iframe.style.height = (opts.height || DEFAULTS.height) + 'px'
    iframe.style.height = '100%'
    iframe.style.border = '0'
    iframe.style.display = 'block'
    iframe.setAttribute('loading', 'eager')
    iframe.setAttribute('referrerpolicy', 'no-referrer')
    return iframe
  }

  function mount(selectorOrEl, options) {
    var el = typeof selectorOrEl === 'string' ? document.querySelector(selectorOrEl) : selectorOrEl
    if (!el) return
    var iframe = createIframe(options)
    el.innerHTML = ''
    el.appendChild(iframe)
    function onMessage(evt) {
      var d = evt.data || {}
      if (d && d.type === 'ww:height' && d.role === 'header' && typeof d.height === 'number') {
        iframe.style.height = d.height + 'px'
      }
    }
    window.addEventListener('message', onMessage)
    var obs = new MutationObserver(function () {
      if (!document.body.contains(iframe)) {
        window.removeEventListener('message', onMessage)
        obs.disconnect()
      }
    })
    obs.observe(document.body, { childList: true, subtree: true })
    return iframe
  }

  window.WishWeaverHeaderWidget = {
    mount: mount,
    createIframe: createIframe,
  }
})()


