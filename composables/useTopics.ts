// utils;
// calc keys for data fetching
export const useTopics = () => {
  const {
    docs: { PRODUCT_IMAGES, TAG_AUTH_PROFILE_prefix },
    key: { TOPIC_CHAT_COM_prefix, TOPIC_CHAT_PRODUCTS_prefix },
  } = useAppConfig();
  const comChat = (comid: number) => `${TOPIC_CHAT_COM_prefix}${comid}`;
  const productChat = (pid: number) => `${TOPIC_CHAT_PRODUCTS_prefix}${pid}`;
  const productImages = (pid: number | undefined) =>
    pid ? `${PRODUCT_IMAGES}${pid}` : "";
  const authProfile = (uid: number | undefined) =>
    uid && `${TAG_AUTH_PROFILE_prefix}${uid}`;
  return { comChat, productChat, productImages, authProfile };
};
