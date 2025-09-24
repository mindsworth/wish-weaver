// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
 { rules: {
      'prettier/prettier': 'error',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off', // Disabled because we use DOMPurify for sanitization
    },
  }
)
