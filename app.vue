<script setup lang="ts">
import { SpinnerAppProcessing, VSnackbarStatusMessage } from "@/components/ui";
import {
  Cart,
  NotifyUnauthenticated,
  TopicChatSidebarMain,
} from "@/components/app";
import { PROFILE, AVATAR } from "@/src";

// defs
const {
  $theme: { theme },
} = useNuxtApp();
const {
  theme: { DARK, LIGHT },
  io: { IOEVENT_PRODUCTS_CHANGE },
  key: { PRODUCTS_CHANGE, ORDER_SEND_STATUS },
  app: { DEFAULT_TRANSITION },
} = useAppConfig();
const htmlAttrs = computed(() => ({
  class: DARK === theme.value ? "dark" : LIGHT,
}));
useHead({
  titleTemplate: (ttl) => (ttl ? `${ttl} | kantar.rs` : "KANTAR.RS"),
  htmlAttrs,
});

// flags
const flagOrderSendStatus$ = useGlobalFlag(ORDER_SEND_STATUS);

// utils
const route = useRoute();
const auth = useStoreApiAuth();
const cart = useStoreCart();
const { destroy: appMenuCacheDestroy } = useAppMenu();

// default guest key @!auth
onceOn(
  () => auth.initialized$ && !auth.isAuth$,
  () => {
    nextTick(() => {
      if (!auth.token$) auth.tokenPutDefault();
    });
  }
);
// @auth update
watch(
  [() => auth.isAuth$, () => auth.isDefault$],
  async ([isAuth, isDefault]) => {
    if (!isDefault) {
      if (!isAuth) {
        // logouts handle; clear cache, hard reload
        appMenuCacheDestroy();
        return reloadNuxtApp({
          path: "/",
          persistState: false,
        });
      }

      // # redirect to index if auth updated at login pages
      if (["auth-register", "auth-login"].includes(String(route.name)))
        await navigateTo({ name: "index" });

      // break
      return;
    }
    //
    // here default user, auth status change
  }
);

// # provides:profile
const { profile, avatar: avatarUrl } = useUserData(() => get(auth.user$, "id"));
provide(PROFILE, profile);
provide(AVATAR, avatarUrl);

const gProductsChange$ = useGlobalVariable(PRODUCTS_CHANGE);
useIOEvent(IOEVENT_PRODUCTS_CHANGE, () => {
  gProductsChange$.value = Date.now();
});

useSeoMeta({
  title: "kantar.rs @nikolav.rs",
  ogTitle: "kantar.rs @nikolav.rs",
  description:
    "kantar.rs | portal namenjen je isključivo onima koji gaje ljubav prema prirodi , selu, zavičaju i gastronomiji @nikolav.rs",
  ogDescription:
    "kantar.rs | portal namenjen je isključivo onima koji gaje ljubav prema prirodi , selu, zavičaju i gastronomiji @nikolav.rs",
  ogImage: "https://nikolav.rs/kantar-rs/kantarlogo.jpg",
  twitterCard: "summary_large_image",
});

// @@eos
</script>

<template>
  <VApp :theme="theme" id="app-main">
    <!-- popup @!auth -->
    <NotifyUnauthenticated />

    <!-- @@chat:main -->
    <TopicChatSidebarMain />

    <!-- @signal:order-sent -->
    <VSnackbarStatusMessage v-model="flagOrderSendStatus$">
      <p>Narudžba je uspešno poslata.</p>
    </VSnackbarStatusMessage>

    <!-- @screen:cart -->
    <!-- default dialog z-index [1004] -->
    <!--  hides h-scrollbar @cat:open -->
    <Html :style="cart.isOpen ? 'overflow: hidden !important' : undefined" />
    <VDialog
      :model-value="cart.isOpen"
      persistent
      no-click-animation
      :transition="DEFAULT_TRANSITION"
      fullscreen
      class="bg--cart-vector-01 cart--vdialog !z-[1234]"
      scrollable
    >
      <Cart />
    </VDialog>

    <!-- @pages -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <!-- @ui:status -->
    <NuxtLoadingIndicator color="red" />
    <SpinnerAppProcessing :opacity="0.99" size="1.55rem" />
  </VApp>
</template>

<style>
.BLUR-enter-active,
.BLUR-leave-active {
  transition: all 0.55s;
}

.BLUR-enter-from,
.BLUR-leave-to {
  opacity: 0;
  filter: blur(0.2rem);
}

.BLUR-leave-active {
  position: absolute;
  z-index: -1;
  width: 100%;
}

.ChatItem-enter-active,
.ChatItem-leave-active {
  transition: all 0.5s ease-out;
}
.ChatItem-enter-from,
.ChatItem-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.Panel1-enter-active,
.Panel1-leave-active {
  transition: all 0.18s ease-out;
}

.Panel1-enter-from,
.Panel1-leave-to {
  opacity: 0;
  scale: 1.022;
  filter: blur(0.33rem);
}
.Panel1-leave-active {
  position: absolute !important;
  width: 100%;
}

/* name:Panel2 */
.Panel2-enter-active,
.Panel2-leave-active {
  transition: all 0.18s ease-out;
}

.Panel2-enter-from,
.Panel2-leave-to {
  opacity: 0;
  /* scale: 1.022; */
  filter: blur(0.33rem);
}
.Panel2-leave-active {
  position: absolute !important;
  width: 100%;
}

/* name:Panel3 */
.PANEL3-enter-active,
.PANEL3-leave-active {
  transition: all 0.24s ease-out;
}

.PANEL3-enter-from,
.PANEL3-leave-to {
  opacity: 0;
  transform: translateX(12px);
}
.PANEL3-leave-active {
  position: absolute !important;
  width: 100%;
}
.PANEL3-move {
  transition: transform 0.24s;
}

.products--list .cols5 {
  width: 20% !important;
  max-width: 20% !important;
  flex-basis: 20% !important;
}
</style>
