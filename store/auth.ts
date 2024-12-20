import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { Roles } from "@/types/types";
import { timeSelectProps } from "element-plus";

export const userStore = defineStore("userStore", {
  state: () => {
    return {
      user: useLocalStorage("user", ""),
      token: useCookie("token:auth"),
      isLoggedIn: false,
    };
  },
  actions: {
    setData(user: any, token: "") {
      console.log("setting data -->", user, token);
      localStorage.setItem("user", JSON.stringify(user));
      const tokenCookie = useCookie("token:auth");
      tokenCookie.value = token;
      this.token = token;
      const userData = localStorage.getItem("user");
      this.user = userData ? JSON.parse(userData) : null;
    },

    logged() {
      if (this.token) {
        this.isLoggedIn = true;
      }
      console.log(this.isLoggedIn);
    },

    async login(values: any) {
      const { data, error } = await useAsyncData("userLogin", async () => {
        const res = await $fetch(
          "https://adhamsaleh.pythonanywhere.com/api/login",
          {
            method: "POST",
            body: {
              email: values.email,
              password: values.password,
            },
          }
        );
        return res;
      });
      if (error.value)
        return {
          message: error.value?.data?.message,
          success: error.value?.data.success,
        };

      return {
        success: data.value?.success,
        user: data.value?.user,
        message: data.value?.message,
      };
    },

    async register(values: any, profilePicture: any) {
      const { data, error } = await useAsyncData(
        "userRegistration",
        async () => {
          const res = await $fetch(
            "https://adhamsaleh.pythonanywhere.com/api/register",
            {
              method: "POST",
              body: {
                // image: profilePicture,
                name: values.fullName,
                email: values.email,
                password: values.password,
                role:
                  values.role === "Company" ? Roles.company : Roles.freelancer,
              },
            }
          );
          return res;
        }
      );
      if (error.value)
        return {
          message: error.value.data?.message,
          success: error.value.data?.success,
        };

      return {
        user: data.value?.user,
        success: data.value?.success,
        message: data.value?.message,
      };
    },

    async logout() {
      const { data, error } = await useAsyncData("userLogout", async () => {
        const res = await $fetch(
          "https://adhamsaleh.pythonanywhere.com/api/logout",
          {
            method: "POST",
          }
        );

        return res;
      });

      return { message: data.value?.message, success: data.value?.success };
    },

    async checkAuthority(code: number = 0) {
      if (code === 600) {
        console.log(code);
        this.token = "";
        this.isLoggedIn = false;
      }

      const { data, error } = await useAsyncData(
        "userCheckAuthority",
        async () => {
          const res = await $fetch(
            "https://adhamsaleh.pythonanywhere.com/api/user",
            {
              headers: {
                Authorization: `${this.token}`,
              },
            }
          );
          return res;
        }
      );
      console.log("from auth store -->", data, error);
      return data;
    },
  },
});
