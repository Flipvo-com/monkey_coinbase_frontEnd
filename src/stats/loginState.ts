import axios from "axios";
import router from "@/router";
import {ref, type Ref} from "vue";
import {createGlobalState, StorageSerializers, useStorage} from "@vueuse/core";

interface LoginData {
	email: string;
	password: string;
	accountType?: string;
}

interface UserModel {
	[key: string]: any;
}

export const loginState = createGlobalState(() => {
	const isLogin: Ref<boolean> = useStorage("isLogin", false);
	const userLogin: Ref<UserModel | null> = useStorage("userLogin", null, undefined, {
		serializer: StorageSerializers.object,
	});
	const loginToken = useStorage("loginToken", "");
	const loginError = ref<string | null>(null);

	const clearLog = () => {
		isLogin.value = false;
		userLogin.value = null;
		loginToken.value = null;
		loginError.value = null;
		localStorage.removeItem("userLogin"); // Ensuring it's removed from local storage
	};

	const login = async (credentials: LoginData) => {
		try {
			const response = await axios.post(import.meta.env.VITE_API_URL + "/login", credentials);
			isLogin.value = true;
			userLogin.value = response.data.user;
			loginToken.value = response.data.token;
			router.push("/dashboard"); // Use router for better SPA handling
		} catch (error:unknown) {
			// Handle error
			if (axios.isAxiosError(error)) {
				if (error.response?.status === 401) {
					clearLog();
					router.push("/login");
				}

				// Set error message
				loginError.value = error.response?.data?.message || "Login failed. Please try again.";
				throw error; // Propagate error to handle loading state correctly in the calling function
			}

			// Set error message
			// Alternatively, you can throw the error to handle loading state correctly in the calling function
			// loginError.value = error.response?.data?.message || "Login failed. Please try again.";
			// throw error; // Propagate error to handle loading state correctly in the calling function
		}
	};

	const logout = async () => {
		try {
			// Send a logout request to the backend
			await axios.post(
				import.meta.env.VITE_API_URL + "/logout",
				{},
				{
					headers: {
						Authorization: `Bearer ${loginToken.value}`,
					},
				}
			);

			// Clear the state after logout
			clearLog();
			router.push("/login").catch(console.error); // Redirect to the login page
		} catch (e) {
			console.error("Logout failed", e);
		}
	};

	return {isLogin, userLogin, loginToken, loginError, logout, login};
});
