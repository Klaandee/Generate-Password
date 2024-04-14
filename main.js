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