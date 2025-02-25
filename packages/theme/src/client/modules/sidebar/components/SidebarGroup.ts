import { computed, defineComponent, h } from "vue";
import { RouterLink, useRoute } from "vue-router";

import Icon from "@theme-hope/components/Icon.js";
import SidebarLinks from "@theme-hope/modules/sidebar/components/SidebarLinks.js";
import { isActiveSidebarItem } from "@theme-hope/modules/sidebar/utils/index.js";

import type { PropType, VNode } from "vue";
import type { ResolvedHopeThemeSidebarGroupItem } from "../../../../shared/index.js";

import "../styles/sidebar-group.scss";

export default defineComponent({
  name: "SidebarGroup",

  props: {
    config: {
      type: Object as PropType<ResolvedHopeThemeSidebarGroupItem>,
      required: true,
    },
    open: { type: Boolean, required: true },
  },

  emits: ["toggle"],

  setup(props, { emit }) {
    const route = useRoute();
    const active = computed(() => isActiveSidebarItem(route, props.config));

    const exact = computed(() =>
      isActiveSidebarItem(route, props.config, true)
    );

    return (): VNode => {
      const {
        collapsable,
        children = [],
        icon,
        prefix,
        link,
        text,
      } = props.config;

      return h("section", { class: "sidebar-group" }, [
        h(
          collapsable ? "button" : "p",
          {
            class: [
              "sidebar-heading",
              {
                clickable: collapsable || link,
                exact: exact.value,
                active: active.value,
              },
            ],
            ...(collapsable
              ? {
                  onClick: () => emit("toggle"),
                  onKeydown: (event: KeyboardEvent): void => {
                    if (event.key === "Enter") emit("toggle");
                  },
                }
              : {}),
          },
          [
            // icon
            h(Icon, { icon }),
            // title
            link
              ? h(RouterLink, { to: link, class: "title" }, () => text)
              : h("span", { class: "title" }, text),
            // arrow
            collapsable
              ? h("span", { class: ["arrow", props.open ? "down" : "right"] })
              : null,
          ]
        ),

        props.open || !collapsable
          ? h(SidebarLinks, { key: prefix, config: children })
          : null,
      ]);
    };
  },
});
