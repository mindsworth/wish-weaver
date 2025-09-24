import { _ as __nuxt_component_0 } from './PageTitle-X0t9rpyg.mjs';
import { defineComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead } from './composables-D7txh_UG.mjs';
import './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Testimonials - WishWeaver",
      meta: [
        {
          name: "description",
          content: "Read testimonials from WishWeaver users."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageTitle = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="container mx-auto px-4 sm:px-6 lg:px-8 py-20">`);
      _push(ssrRenderComponent(_component_PageTitle, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Testimonials - WishWeaver`);
          } else {
            return [
              createTextVNode("Testimonials - WishWeaver")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/testimonials.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=testimonials-CCdRRjH6.mjs.map
