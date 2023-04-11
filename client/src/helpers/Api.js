import { Local } from "./Local";

export class Api {
	/**
	 * Get all users
	 **/
	//unrelated to form
	static async loginUser(loginObj) {
		//USE THE SAME URL than in app.js server side
		// console.log(loginObj);
		return await this._doFetch("/login", "POST", loginObj);
	}

	/**
	 * Get all users
	 **/

	static async getUsers() {
		return await this._doFetch("/users");
	}

	/**
	 * Get data for user with ID 'userId'
	 **/

	static async getUser(id) {
		return await this._doFetch(`/users/${id}`);
	}

	/**
	 * General purpose GET (for URLs like /members-only)
	 **/

	static async getContent(url) {
		return await this._doFetch(url);
	}

	/**
	 * Private method for internal use only
	 **/

	static async _doFetch(url, method = "GET", body = null) {
		// Prepare fetch() options
		let options = {
			method,
			headers: {},
		};

		// Add token to headers if it exists in localStorage
		let token = Local.getToken();
		if (token) {
			options.headers["Authorization"] = "Bearer " + token;
		}

		// Add the body if one is supplied
		if (body) {
			options.headers["Content-Type"] = "application/json";
			options.body = JSON.stringify(body);
		}

		// Do the fetch() and store the results in a "unified" myresponse obj
		//this is to allow all the fetch for post, put, get, etc. Without this, we wouldn't be able to use fetch get or post etc
		let myresponse = { ok: false, data: null, status: 0, error: "" };
		try {
			// adding the /api here will make that all the call with the server to add /api
			let response = await fetch("/api" + url, options);
			if (response.ok) {
				myresponse.ok = true;
				myresponse.data = await response.json();
				myresponse.status = response.status;
			} else {
				myresponse.status = response.status;
				myresponse.error = response.statusText;
			}
		} catch (err) {
			myresponse.error = err.message;
		}

		return myresponse;
	}
}
