import __nuxt_component_0 from './index--3bApIOW.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';

const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    variant: { default: "primary" },
    size: { default: "md" },
    disabled: { type: Boolean, default: false },
    icon: { default: void 0 },
    iconPosition: { default: "left" }
  },
  emits: ["click"],
  setup(__props) {
    const props = __props;
    const variantClasses = {
      primary: "bg-primary text-white hover:bg-primary-hover",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
      outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
      ghost: "text-gray-700 hover:bg-gray-100",
      destructive: "bg-red-600 text-white hover:bg-red-700"
    };
    const sizeClasses = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 py-2",
      lg: "h-12 px-8 text-lg"
    };
    const buttonClasses = computed(() => [
      baseClasses,
      variantClasses[props.variant],
      sizeClasses[props.size]
    ]);
    const iconClasses = computed(() => {
      const sizeMap = {
        sm: "h-4 w-4",
        md: "h-4 w-4",
        lg: "h-5 w-5"
      };
      const positionMap = {
        left: "mr-2",
        right: "ml-2",
        default: "m-0"
      };
      return [sizeMap[props.size], positionMap[props.iconPosition]];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: unref(buttonClasses),
        disabled: _ctx.disabled
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (_ctx.icon) {
        _push(ssrRenderComponent(_component_Icon, {
          name: _ctx.icon,
          class: unref(iconClasses)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</button>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main, { __name: "UiButton" });

export { __nuxt_component_2 as _ };
//# sourceMappingURL=Button-DtLqzAtx.mjs.map
