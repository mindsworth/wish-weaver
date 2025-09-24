import { _ as __nuxt_component_0 } from './PageTitle-X0t9rpyg.mjs';
import { _ as __nuxt_component_2 } from './Button-DtLqzAtx.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
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
import './index--3bApIOW.mjs';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "WishWeaver - Make Every Occasion Special with Group Cards",
      meta: [
        {
          name: "description",
          content: "Create meaningful group cards with contributions from multiple people. Perfect for birthdays, anniversaries, and special occasions."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageTitle = __nuxt_component_0;
      const _component_UiButton = __nuxt_component_2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-20" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center space-y-10">`);
      _push(ssrRenderComponent(_component_PageTitle, { class: "!opacity-100" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Make Every <span class="text-primary"${_scopeId}>Thank You</span> special with a Group Card `);
          } else {
            return [
              createTextVNode(" Make Every "),
              createVNode("span", { class: "text-primary" }, "Thank You"),
              createTextVNode(" special with a Group Card ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-3xl text-primary mb-8 max-w-7xl mx-auto"> For yourself or someone special with messages from multiple contributors </p><div class="flex flex-col sm:flex-row gap-4 justify-center">`);
      _push(ssrRenderComponent(_component_UiButton, {
        variant: "primary",
        size: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Weave a Group Card `);
          } else {
            return [
              createTextVNode(" Weave a Group Card ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiButton, {
        variant: "outline",
        size: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View a Sample Card `);
          } else {
            return [
              createTextVNode(" View a Sample Card ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CxDFmX9O.mjs.map
