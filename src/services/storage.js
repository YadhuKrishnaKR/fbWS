export const User = {
	set: (data) => {
		// console.log(data);
		// const { token, info } = data;
		// info.token = token;
		window.localStorage.setItem("Userinfo",JSON.stringify(data).toString());
		// console.log(info.token)
		// const encoded = Buffer(JSON.stringify(data)).toString("hex");
		// console.log(encoded)
		// window.localStorage.setItem("USER", encoded);
	},
	get: () => {
		const user = window.localStorage.getItem("Userinfo");
		if (user != null) {
			// const decoded = Buffer.from(user, "hex");
			 return JSON.parse(user.toString());
			// return user;
		} else {
			return null;
		}
	},
	update: (data) => {
		const user = window.localStorage.getItem("USER");
		const decoded = Buffer.from(user, "hex");
		const decodedParsed = JSON.parse(decoded.toString());
		data.token = decodedParsed.token;
		const encoded = Buffer(JSON.stringify(data)).toString("hex");
		window.localStorage.setItem("USER", encoded);
	},
	token: () => {
		const user = window.localStorage.getItem("USER");
		if (user != null) {
			const decoded = Buffer.from(user, "hex");
			const decodedParsed = JSON.parse(decoded.toString());
			return decodedParsed.token;
		} else {
			return null;
		}
	},
	loggedin: () => {
		const user = window.localStorage.getItem("USER");
		if (user != null) {
			const decoded = Buffer.from(user, "hex");
			const decodedParsed = JSON.parse(decoded.toString());
			// TODO: check expiry and auto-logout if necessary
			return decodedParsed.token != null;
		} else {
			return false;
		}
	},
	logout: () => {
		window.localStorage.clear();
		window.location.href = "/";
	}
};

export const Config = {
	set: (data) => {
		console.log(data)
		const encoded = Buffer(JSON.stringify(data)).toString("hex");
		window.localStorage.setItem("CONFIG", encoded);
	},
	get: () => {
		const config = window.localStorage.getItem("CONFIG");
		if (config != null) {
			const decoded = Buffer.from(config, "hex");
			return JSON.parse(decoded);
		} else {
			return null;
		}
	}
};
