import { auth as firebaseAuth } from "@/services/firebase";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { URL_AUTH_social } from "@/config";

export const useStoreApiAuthProvideSocial = defineStore(
  "auth-provide-social",
  () => {
    const authApi = useStoreApiAuth();
    let addAuthData$ = ref();

    onAuthStateChanged(firebaseAuth, async (authData) => {
      if (!authData) return;
      if (authApi.isAuthenticated$) return;
      console.log({ auth: authData });

      // send all social authData { auth: authData }
      //  register/login.. get { token }
      //  set token authApi.tokenPut(token)
      authApi.tokenPut(
        get(
          await $fetch(URL_AUTH_social, {
            method: "POST",
            body: { ...(addAuthData$.value || {}), auth: authData },
          }),
          "token"
        ) || ""
      );
    });

    const loginFacebook = async (data?: Record<string, any>) => {
      addAuthData$.value = data;
      await signInWithPopup(firebaseAuth, new FacebookAuthProvider());
    };
    const loginGoogle = async (data?: Record<string, any>) => {
      addAuthData$.value = data;
      await signInWithPopup(firebaseAuth, new GoogleAuthProvider());
    };

    return {
      api: authApi,
      loginFacebook,
      loginGoogle,
    };
  }
);
