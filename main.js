// Generate Password All Features

// Input Special Chars
const inputSpecialChars = document.getElementById("specialCharsInput");

inputSpecialChars.addEventListener("input", function (event) {
  let currentValue = inputSpecialChars.value;

  let newValue = currentValue.replace(/[a-zA-Z0-9\s]/g, "");

  inputSpecialChars.value = newValue;
});

// Generate Password Function
function generatePassword() {
  const length = parseInt(document.getElementById("lengthInput").value);
  let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // !@#$%^&*()_+~`|}{[]:;?><,./-=
  const specialChars = document.getElementById("specialCharsInput").value;
  if (specialChars) {
    charset += specialChars; // Agregar caracteres especiales si se proporcionaron
  }
  let password = "";
  if (length > 5 && length < 71) {
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }
}

// Show Password Function
function showPassword() {
  const generatedPassword = generatePassword();
  const passwordElement = document.getElementById("password");
  if (generatedPassword === undefined) {
    passwordElement.textContent = "Length setting invalid";
  } else {
    passwordElement.textContent = "Your new password: " + generatedPassword;
    document.getElementById("copyPasswordBtn").style.display = "inline";
  }
}

// Copy Password Function
function copyPassword() {
  const passwordText = document.getElementById("password").textContent;
  const textArea = document.createElement("textarea");
  textArea.value = passwordText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  alert("The password was copied successfully")
}
// Button Function
const generatePasswordBtn = document.getElementById("generate");
generatePasswordBtn.addEventListener("click", showPassword);

const copyPasswordBtn = document.getElementById("copyPasswordBtn");
copyPasswordBtn.addEventListener("click", copyPassword);

// Toggle Theme

const themeBtn = document.getElementById('toggle-theme');
const headBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copyPasswordBtn');
const body = document.body;

function toggleTheme() {
  if (body.classList.contains("theme-light")) {
    // Body
    body.classList.remove("theme-light");
    body.classList.add("theme-dark");
    // Head Button
    headBtn.classList.remove("button");
    headBtn.classList.add("btn-dark");
    // Copy Button
    copyBtn.classList.remove("button");
    copyBtn.classList.add("btn-dark");
    localStorage.setItem("theme", "dark");
  } else {
    // Body
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
    // Head Button
    headBtn.classList.add("button");
    headBtn.classList.remove("btn-dark");
    // Copy Button
    copyBtn.classList.add("button");
    copyBtn.classList.remove("btn-dark");
    localStorage.setItem("theme", "light");
  }
}

themeBtn.addEventListener("click", toggleTheme);

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  // Body
  body.classList.remove("theme-light");
  body.classList.add("theme-dark");
  // Head Button
  headBtn.classList.remove("button");
  headBtn.classList.add("btn-dark");
  // Copy Button
  copyBtn.classList.remove("button");
  copyBtn.classList.add("btn-dark");
} else {
  // Body
  body.classList.remove("theme-dark");
  body.classList.add("theme-light");
  // Head Button
  headBtn.classList.add("button");
  headBtn.classList.remove("btn-dark");
  // Copy Button
  copyBtn.classList.add("button");
  copyBtn.classList.remove("btn-dark");
  localStorage.setItem("theme", "light");
}