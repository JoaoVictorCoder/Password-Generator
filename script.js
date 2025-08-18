const generateButton = document.getElementById("generate-button");
const passwordInput = document.getElementById("passwordInput");
const copyButton = document.getElementById("copyButton");
const togglePassword = document.getElementById("togglePassword");
const toggleIcon = document.getElementById("toggleIcon");
const togglePasswordTooltip = document.getElementById("togglePasswordTooltip");

const passwordChars = (min, max) =>
	Math.ceil(Math.random() * (min - max) + max);

const generatePassword = (passwordLength) => {
	let password = "";
	for (let i = 0; i < passwordLength; i++) {
		const characters = String.fromCharCode(passwordChars(33, 126));
		password += characters;
	}
	return password;
};

generateButton.addEventListener("click", () => {
	passwordInput.value = generatePassword(13);
});

copyButton.addEventListener("click", () => {
	navigator.clipboard.writeText(passwordInput.value);
});

togglePassword.addEventListener("click", () => {
	if (passwordInput.type === "text") {
		passwordInput.type = "password";
		toggleIcon.icon = "mdi:eye-outline";
		togglePasswordTooltip.dataset.tip = "Show password";
	} else {
		passwordInput.type = "text";
		toggleIcon.icon = "mdi:eye-off-outline";
		togglePasswordTooltip.dataset.tip = "Hide password";
	}
});
