import {
  useThemeData as _useThemeData,
  useThemeLocaleData as _useThemeLocaleData,
} from "@vuepress/plugin-theme-data/client";
import { computed } from "vue";
import { getAuthor } from "vuepress-shared/client";

import type { AuthorInfo } from "vuepress-shared";
import type {
  ThemeDataRef,
  ThemeLocaleDataRef,
} from "@vuepress/plugin-theme-data/client";
import type { ComputedRef } from "vue";
import type {
  HopeThemeConfig,
  HopeThemeLocaleConfig,
} from "../../shared/index.js";

export const useThemeData = (): ThemeDataRef<HopeThemeConfig> =>
  _useThemeData<HopeThemeConfig>();
export const useThemeLocaleData =
  (): ThemeLocaleDataRef<HopeThemeLocaleConfig> =>
    _useThemeLocaleData<HopeThemeLocaleConfig>();

export const useThemeAuthor = (): ComputedRef<AuthorInfo[]> => {
  const themeLocale = useThemeLocaleData();

  return computed(() => getAuthor(themeLocale.value.author, false));
};

export const usePure = (): ComputedRef<boolean> =>
  computed(() => Boolean(useThemeData().value.pure));
