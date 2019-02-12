import Vue from 'vue'

if (process.env.NODE_ENV !== 'production') {
  const VueAxe = require('vue-axe')
  Vue.use(VueAxe, {
    config: {
      rules: [
        { id: 'accesskeys', enabled: true },
        { id: 'aria-allowed-attr', enabled: true },
        { id: 'aria-allowed-role', enabled: true },
        { id: 'aria-roles', enabled: true },
        { id: 'button-name', enabled: true },
        { id: 'color-contrast', enabled: true },
        { id: 'css-orientation-lock', enabled: true },
        { id: 'document-title', enabled: true },
        { id: 'duplicate-id-active', enabled: true },
        { id: 'duplicate-id-aria', enabled: true },
        { id: 'duplicate-id', enabled: true },
        { id: 'empty-heading', enabled: true },
        { id: 'focus-order-semantics', enabled: true },
        { id: 'heading-order', enabled: true },
        { id: 'html-has-lang', enabled: true },
        { id: 'html-lang-valid', enabled: true },
        { id: 'image-alt', enabled: true },
        { id: 'image-redundant-alt', enabled: true },
        { id: 'label-title-only', enabled: true },
        { id: 'link-in-text-block', enabled: true },
        { id: 'link-name', enabled: true },
        { id: 'list', enabled: true },
        { id: 'listitem', enabled: true },
        { id: 'meta-refresh', enabled: true },
        { id: 'meta-viewport-large', enabled: true },
        { id: 'meta-viewport', enabled: true },
        { id: 'p-as-heading', enabled: true },
        { id: 'page-has-heading-one', enabled: true },
        { id: 'valid-lang', enabled: true }
      ]
    }
  })
}