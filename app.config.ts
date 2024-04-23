import type { TStoreMain, TStoreFlags, IConfigDocs, IAppData } from "@/types";
import {
  assign,
  reMatchViewUser,
  reMatchViewProduct,
  stripSlashesEnd,
} from "@/utils";
import { PRODUCTION$, URL_APP_PUBLIC } from "@/config";

const themeDark = "dark";
const themeLight = "light2";
const AUTH_LOCKED = "eq1hiOTCPNCfo20Y";
const CHAT_EDIT_active = "rAkrT0XZJvlXbb";
const TASK_EDIT_active = "TB2HXTaILV3eKlQAoSa8";
const PAGE_CACHED = "WrTD0QD08cjfqC4pol";
const PRODUCT_CATEGORY_prefix = "@product:category:";

export default defineAppConfig({
  ADMIN_EMAIL: "admin@nikolav.rs",
  DEBUG: true !== PRODUCTION$,
  APP_USER_DEFAULT: {
    email: "user@nikolav.rs",
    password: "user@nikolav.rs",
  },
  app: {
    DEFAULT_TRANSITION: "slide-y-reverse-transition",
    CART_BADGE_OFFSET: 9,
    DEFAULT_NO_PRODUCT_IMAGE_FOUND: "/no-image-available.png",
  },
  com: {
    FIELDS: [
      "ownerFirstName",
      "ownerLastName",
      "name",
      "slug",
      "pin",
      "address",
      "district",
      "phone",
      "delivery",
      "about",
    ],
  },
  products: {
    PRODUCT_CATEGORY_prefix,
    perPage: 10,
    fields: [
      "name",
      "category",
      "price",
      "stockType",
      "stock",
      "onSale",
      "description",
    ],
    categories: [
      {
        title: "Bašta, voće, povrće, gljive",
        value: `${PRODUCT_CATEGORY_prefix}basta`,
      },
      {
        title: "Meso, jaja, mesne prerađevine",
        value: `${PRODUCT_CATEGORY_prefix}meso`,
      },
      {
        title: "Mleko i mlečni proizvodi",
        value: `${PRODUCT_CATEGORY_prefix}mleko`,
      },
      {
        title: "Začin, ulje, čaj, bilje",
        value: `${PRODUCT_CATEGORY_prefix}zacin-ulje`,
      },
      {
        title: "Brašno, žitarice, pekara",
        value: `${PRODUCT_CATEGORY_prefix}brasno`,
      },
      {
        title: "Med, proizvodi od meda",
        value: `${PRODUCT_CATEGORY_prefix}med`,
      },
      {
        title: "Zimnica, namazi, kompot",
        value: `${PRODUCT_CATEGORY_prefix}zimnica`,
      },
      {
        title: "Sokovi, sirup",
        value: `${PRODUCT_CATEGORY_prefix}sokovi`,
      },
      {
        title: "Alkoholna pića",
        value: `${PRODUCT_CATEGORY_prefix}pice`,
      },
      {
        title: "Zanat, rukotvorine",
        value: `${PRODUCT_CATEGORY_prefix}zanat`,
      },
    ],
  },
  docs: {
    CHAT_ORDER_COM_USER_prefix: "e5iT1p1Mmx5HD@",
    COM_PHOTOS_prefix: "@com:photos:",
    LIKES_preix: "@likes:",
    prefix_CHAT_ACTIVE: "KFrbiAW5Zm3:",
    prefix_TAG_USERS_DOCS: "pH82VKaHwf3RLfZlR:",
    PRODUCT_IMAGES: "@images:product:",
    TAG_COMPANY_PROFILE_prefix: "@company:profile:fwgM8::",
    TAG_USERS: "@users",
    TASKS_ALL: "@tasks:all",
    TASKS_USER_prefix: "Njvrw1gYEXd3yv:",
  },
  //
  key: {
    SLUG_com: "gazdinstvo",
    SLUG_product: "proizvod",
    INBOX_TAB_ACTIVE: "nuH82mKP7ZbUxtiEQ",
    COM_RATING_prefix: "rating:com:SiOobaXI2QXJgHs::",
    PRODUCT_RATING_prefix: "rating:products:FHj8C6t30equ4D::",
    RATING_LOCAL: "hGPTySh8oXXwmRgAV16q",
    TOPIC_RATINGS: "ratings:N1cdcqMM",
    TOPIC_CHAT_ACTIVE: "8H7ykahv",
    CARD_PRODUCT_DISPLAYED_HOVERED_ID: "wPV360PastGjrwS9hr",
    TOPIC_CHAT_PRODUCTS_prefix: "chat:products:vyuoiOe3eZW7::",
    TOPIC_CHAT_COM_prefix: "chat:com:EMs0Q::",
    PRODUCTS_LIKES_prefix: "MEDs6Eov9fHBM5HZ6I1X::",
    COM_LIKES_prefix: "Y9tqzJgln0B::",
    LIKES_STORE: "hqYqZ31rN4xwfb2qc",
    DISLIKES_STORE: "HwJ0dv9",
    APP_MOUNTED: "Zkcmk4BnXHU",
    APP_PROCESSING: "FlaelfhZddK",
    AUTH_CREDS: "pafer98hf",
    AUTH_LOCKED,
    CHAT_CLIENTID_ACTIVE: "O5zl57Fui",
    CHAT_NAME: "QOPnfTw9",
    CHAT_ORDER_MESSAGE: "SInuQBaRiY",
    FLAG_CART_OPEN: "S46jud",
    FORM_COMPANY_ID: "2wIETsis",
    INJECT_AUTHAPI: "WYvEK29UZIP",
    INJECT_THEME: "Aasnvy2eaxE",
    ORDER_ACTIVE: "order:active:S52BW2",
    ORDER_SEND_STATUS: "Ty6qF",
    PRODUCT_ADD: "HAvQCqapN1NuJFIoS",
    PRODUCT_EDIT: "fRbSc",
    PRODUCT_SELECTED: "Be3Q6GMsqZPSP",
    PRODUCTS_CHANGE: "O36Bjz6COY6i",
    PROVIDE_APP_DATA: "Ud8dHoadmBgSr55P6gJ",
    TASKS_SELECTED_IDS: "f6sSDP",
    THEME: "0Fgky53B2UbA1fG3lKcV",
  },
  //
  FIELDS_OMIT_STORAGE_META: ["id", "created_at", "updated_at", "__typename"],
  //
  DEFAULT_CONFIG_useApiDocs: <IConfigDocs>{ autoReload: true },
  defaults: {
    appData: <IAppData>{
      "admin:email": "admin@nikolav.rs",
    },
  },
  //
  api: {
    TAG_STORAGE: "@storage:",
    DOCS_CHAT_ALL: "@chat:all",
  },
  //
  graphql: {
    STORAGE_QUERY_POLL_INTERVAL: 123456,
  },
  //
  stores: {
    gravatars: {
      BASE_URL: "https://www.gravatar.com/avatar",
      GRAVATARS_CACHE: "gravatars:DKueKjfBLJlRj7k",
      MODE: {
        monsterid: true,
        wavatar: true,
        robohash: true,
      },
      SIZE: 92,
    },
    cart: {
      initial: {
        code: "",
        descrption: "",
        items: <Record<number, number>>{},
      },
    },
    main: {
      initial: <TStoreMain>{
        "app:name": "nikolav.rs",
        [CHAT_EDIT_active]: null,
        [TASK_EDIT_active]: null,
        [PAGE_CACHED]: "",
      },
      CHAT_ACTIVE: "ozbbRlAv19DO",
      CHAT_ACTIVE_title: "SFImifljHov",
      CHAT_EDIT_active,
      TASK_EDIT_active,
      PAGE_CACHED,
    },
    flags: {
      initial: <TStoreFlags>{
        [AUTH_LOCKED]: false,
      },
    },
    auth: {
      KEY_ACCESS_TOKEN: ":sEe5xYuTL4q",
      KEY_USEFETCH_AUTHDATA: "GEXjh1kt9Oc",
      authDataFields: ["id", "email"],
      initial: () => "",
      authHeaders: (token: string, additional?: Record<string, any>) =>
        assign(
          token
            ? {
                Authorization: `Bearer ${token}`,
              }
            : {},
          additional || {}
        ),
    },
  },
  //
  io: {
    IOEVENT_AUTH_NEWUSER: "@auth:newuser",
    IOEVENT_COM_PHOTOS_CHANGE_prefix: "change:com-photos:",
    IOEVENT_DOC_CHANGE_prefix: "change://doc@",
    IOEVENT_DOCS_CHANGE_JsonData: "change:docs:JsonData:",
    IOEVENT_DOCS_CHANGE: "change:docs",
    IOEVENT_DOCS_TAGS_CHANGE_prefix: "change:docs:tags:",
    IOEVENT_FILES: "@files:updated",
    IOEVENT_ORDERS_CHANGE: "@orders:change:",
    IOEVENT_PRODUCT_IMAGES_CHANGE_prefix: "change:product-images:",
    IOEVENT_PRODUCTS_CHANGE_prefix: "change:products::",
    IOEVENT_PRODUCTS_CHANGE: "@change:products:all",
    IOEVENT_STORAGE_CHANGE: "@storage:",
  },
  theme: {
    DEFAULT: themeLight,
    DARK: themeDark,
    LIGHT: themeLight,
  },
  layout: {
    // appBarHeight: 32,
    appBarHeight: 52,
    // additional @VMain/padding-top
    offsetTop: "1.22rem",
    //
    CAROUSEL_NAV_OFFSET_product_page: 42,
  },
  effect: {
    default: "headShake",
    duration: 890,
  },
  urls: {
    appPublic: URL_APP_PUBLIC,
    github: "https://github.com/nikolav/nuxtflask",
    // comPages: `${stripSlashesEnd(URL_APP_PUBLIC)}/gazdinstva/`,
    comPages: "/gazdinstva/",
    productPages: "/proizvodi/",
    QUERY: "q",
  },
  storage: {
    MENU_CATEGORY: "7n0FS9ZxoVN",
  },
  links: {
    external: {
      RPU: "https://www.apr.gov.rs/registri/ugovori-o-finansiranju-poljoprivredne-proizvodnje/o-registru.2367.html#:~:text=broj%20pod%20kojim%20je%20ugovor%20o%20finansiranju%20poljoprivredne%20proizvodnje%20zaveden%20Registru%20ugovora%20o%20finansiranju%20poljoprivredne%20proizvodnje",
      GOOGLE_CALENDAR_EDIT_PAGE:
        "https://calendar.google.com/calendar/u/0?cid=dnVrb3ZpY25pa29sYTIwMTRAZ21haWwuY29t",
      SRC_GOOGLE_CALENDAR_IFRAME:
        "https://calendar.google.com/calendar/embed?height=480&wkst=2&ctz=Europe%2FBelgrade&bgcolor=%23ffffff&showTitle=0&showTabs=0&showCalendars=0&hl=sr&src=dnVrb3ZpY25pa29sYTIwMTRAZ21haWwuY29t&color=%230f5359",
    },
  },
  re: {
    // routes with provided 'default user' login fallback
    viewRoutes: [reMatchViewUser, reMatchViewProduct],
  },
});
