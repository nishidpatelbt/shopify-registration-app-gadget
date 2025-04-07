let api = new Gadget();
//const recommendedProducts = await api.shopifyCustomer.findMany();
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
let modal = document.querySelector("[registrationmodal]");
let footer = document.querySelector("footer");

if (modal && footer) {
  footer.insertAdjacentElement("afterend", modal);
}

// Steps
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");
const step5 = document.getElementById("step5");
const step6 = document.getElementById("step6");
const step7 = document.getElementById("step7");
const step8 = document.getElementById("step8");

// Buttons
const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const next3 = document.getElementById("next3");
const next4 = document.getElementById("next4");
const next5 = document.getElementById("next5");
const next6 = document.getElementById("next6");
const next7 = document.getElementById("next7");

const countryDropdown = document.querySelector(
  ".ReactFlagsSelect-module_flagsSelect"
);
let countryUl = document.querySelector(
  ".ReactFlagsSelect-module_selectOptions"
);
const back = document.querySelector("[registrationmodal] #back");
const submitBtn = document.getElementById("submitBtn");
let progressBar = document.querySelector(".main_progress-section");

// Inputs
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const street = document.getElementById("street");
const houseNumber = document.getElementById("houseNumber");
const apartment = document.getElementById("apartment");
const postalCode = document.getElementById("postalCode");
const townCity = document.getElementById("townCity");
let phoneNumber = document.getElementById("mobile_code");
let mobileNumberCode = document.querySelector(".iti__selected-dial-code");
let pins = document.querySelectorAll('input[name^="pin"]');
const artYes = document.getElementById("artYes");
const artNo = document.getElementById("artNo");
const artworksNumberSection = document.getElementById("artworksNumberSection");
const artBoughtType = document.querySelector(".art-bought-type");
const interest1 = document.getElementById("interest1");
const interest2 = document.getElementById("interest2");
const interest3 = document.getElementById("interest3");
const interest4 = document.getElementById("interest4");
const interest5 = document.getElementById("interest5");
const artNumber1 = document.getElementById("artNumber1");
const artNumber2 = document.getElementById("artNumber2");
const artNumber3 = document.getElementById("artNumber3");
const artNumber4 = document.getElementById("artNumber4");
const rangeValue1 = document.getElementById("rangeValue1");
const rangeValue2 = document.getElementById("rangeValue2");
const rangeValue3 = document.getElementById("rangeValue3");
const rangeValue4 = document.getElementById("rangeValue4");
const rangeValue5 = document.getElementById("rangeValue5");
const rangeValue6 = document.getElementById("rangeValue6");
const rangeValue7 = document.getElementById("rangeValue7");
const createAccountButton = document.getElementById("create_account_button");
const SignInButton = document.getElementById("sign_in_button");
const SignInForm = document.getElementById("app_login_form");
const CreateAccountForm = document.getElementById("customerForm");

// Errors
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const streetError = document.getElementById("streetError");
const houseNumberError = document.getElementById("houseNumberError");
const apartmentError = document.getElementById("apartmentError");
const postalCodeError = document.getElementById("postalCodeError");
const townCityError = document.getElementById("townCityError");
const phoneNumberError = document.getElementById("phoneNumberError");
const otpError = document.getElementById("otpError");
const artError = document.getElementById("artError");
const interestError = document.getElementById("interestError");
const artNumberError = document.getElementById("artNumberError");
const rangeError = document.getElementById("rangeError");

// Modal open and close
openModal.addEventListener("click", () => modal.classList.remove("hidden"));
closeModal.addEventListener("click", () => modal.classList.add("hidden"));
// window.addEventListener('click', (e) => {
//     if (e.target === modal) modal.classList.add('hidden');
// });
createAccountButton.addEventListener("click", (e) => {
  e.preventDefault();
  SignInForm.classList.add("hidden");
  CreateAccountForm.classList.remove("hidden");
});
SignInButton.addEventListener("click", (e) => {
  e.preventDefault();
  CreateAccountForm.classList.add("hidden");
  SignInForm.classList.remove("hidden");
  progressBar.classList.add("hidden");
});
countryDropdown.addEventListener("click", (e) => {
  e.preventDefault();
  countryUl.classList.toggle("hidden");
});
countryUl.querySelectorAll("li").forEach((li) => {
  li.addEventListener("click", () => {
    let clickValue = li.querySelector("span")?.getAttribute("value");
    countryDropdown.querySelector("span").innerText = clickValue;
    document.getElementById("country").value = clickValue;
  });
});
back.addEventListener("click", (e) => {
  e.preventDefault();
  setTimeout(function () {
    if (!step1.classList.contains("hidden")) {
      back.classList.add("invisible");
      progressBar.classList.add("hidden");
    }
  }, 100);
});
// Step 1 Validation
next1.addEventListener("click", (e) => {
  e.preventDefault();
  let valid = true;
  if (firstName.value.trim() === "") {
    firstNameError.classList.remove("hidden");
    valid = false;
  } else {
    firstNameError.classList.add("hidden");
  }
  if (lastName.value.trim() === "") {
    lastNameError.classList.remove("hidden");
    valid = false;
  } else {
    lastNameError.classList.add("hidden");
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    emailError.classList.remove("hidden");
    valid = false;
  } else {
    emailError.classList.add("hidden");
  }
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password.value.trim())) {
    passwordError.classList.remove("hidden");
    valid = false;
  } else {
    passwordError.classList.add("hidden");
  }
  if (valid) {
    step1.classList.add("hidden");
    step2.classList.remove("hidden");
    progressBar.classList.remove("hidden");
    back.classList.remove("invisible");
    progressBar.querySelector(".progress_bar").style.width = `${
      (100 / 6) * 1
    }%`;
  }
});

// Step 2 Validation
next2.addEventListener("click", (e) => {
  e.preventDefault();
  let valid = true;

  if (street.value.trim() === "") {
    streetError.classList.remove("hidden"); // Show the error message

    valid = false; // Mark the form as invalid
  } else {
    streetError.classList.add("hidden"); // Hide the error message
  }

  if (houseNumber.value.trim() === "") {
    houseNumberError.classList.remove("hidden"); // Show the error message

    valid = false; // Mark the form as invalid
  } else {
    houseNumberError.classList.add("hidden"); // Hide the error message
  }

  if (apartment.value.trim() === "") {
    apartmentError.classList.remove("hidden"); // Show the error message if the content is invalid

    valid = false; // Mark as invalid

    console.log("True");
  } else {
    apartmentError.classList.add("hidden"); // Hide the error message if content is valid or empty
  }

  const postalCodeRegex = /^\d+$/; // Simple regex for digits-only postal codes

  if (!postalCodeRegex.test(postalCode.value.trim())) {
    postalCodeError.classList.remove("hidden"); // Show error if invalid

    valid = false;
  } else {
    postalCodeError.classList.add("hidden"); // Hide error if valid
  }

  if (townCity.value.trim() === "") {
    townCityError.classList.remove("hidden"); // Show the error message

    valid = false;
  } else {
    townCityError.classList.add("hidden"); // Hide the error message if valid
  }

  const selectedDate = new Date(birthday.value);

  const currentDate = new Date();
  if (!birthday.value.trim()) {
    birthdayError.classList.remove("hidden");
    valid = false;
  } else if (selectedDate > currentDate) {
    birthdayError.classList.remove("hidden");
    valid = false;
  } else {
    birthdayError.classList.add("hidden");
  }

  if (valid) {
    step2.classList.add("hidden");
    step3.classList.remove("hidden");
    progressBar.classList.remove("hidden");
    progressBar.querySelector(".progress_bar").style.width = `${
      (100 / 6) * 2
    }%`;
  }
});

// Step 3 Validation
next3.addEventListener("click", (e) => {
  e.preventDefault();
  let valid = true;
  let response = smsSend();
  console.log(response);
  const phoneRegex = /^[\d\+\-\(\)\s]*$/;
  if (phoneNumber.value.trim() === "") {
    phoneNumberError.textContent = "Phone number is required"; // Custom message for empty field

    phoneNumberError.classList.remove("hidden"); // Show error if blank

    valid = false;
  } else if (!phoneRegex.test(phoneNumber.value.trim())) {
    phoneNumberError.textContent = "Please enter a valid phone number"; // Message for invalid format

    phoneNumberError.classList.remove("hidden"); // Show error if invalid

    valid = false;
  } else {
    phoneNumberError.classList.add("hidden"); // Hide error if valid
  }
  if (valid) {
    phoneNumber.value = `${mobileNumberCode.textContent.trim()}${phoneNumber.value.trim()}`;
    step3.classList.add("hidden");
    step4.classList.remove("hidden");
    progressBar.classList.remove("hidden");
    console.log(phoneNumber.value);
    progressBar.querySelector(".progress_bar").style.width = `${
      (100 / 6) * 3
    }%`;
  }
});

// Step 4 Validation
next4.addEventListener("click", async (e) => {
  e.preventDefault();
  let valid = true;
  let isAnyEmpty = false;
  const pinRegex = /^\d$/;

  pins.forEach((pin, index) => {
    const value = pin.value.trim();

    if (value === "") {
      isAnyEmpty = true;
      valid = false;
    } else if (!pinRegex.test(value)) {
      pin.value = ""; // Clear invalid input
      valid = false;
    }
  });

  if (isAnyEmpty) {
    otpError.textContent = "Please enter all OTP digits"; // Message for blank fields
    otpError.classList.remove("hidden"); // Show error
  } else if (!valid) {
    otpError.textContent = "Invalid input. Please enter only digits"; // Message for invalid input
    otpError.classList.remove("hidden"); // Show error
  } else {
    const inputPins = Array.from(pins)
      .map((pin) => pin.value)
      .join("");
    const verification = await verifyOTP(
      inputPins,
      `${mobileNumberCode.textContent.trim()}${phoneNumber.value.trim()}`
    );
    console.log(verification);
    //if(verification == 'true') {
    setTimeout(function () {
      otpError.classList.add("hidden");
      step4.classList.add("hidden");
      step5.classList.remove("hidden");
      progressBar.classList.remove("hidden");
      progressBar.querySelector(".progress_bar").style.width = `${
        (100 / 6) * 4
      }%`;
    }, 2000);
    // } else {
    //     otpError.textContent = "Invalid OTP. Please try again.";
    //     otpError.classList.remove('hidden');
    // }
  }
});

// Add input event listeners outside the click event to avoid duplication
pins.forEach((pin, index) => {
  pin.addEventListener("input", (e) => {
    const pinRegex = /^\d$/;
    if (!pinRegex.test(e.target.value)) {
      e.target.value = ""; // Clear invalid input
    } else if (e.target.value.length === 1 && index < pins.length - 1) {
      pins[index + 1].focus();
    }
  });

  pin.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      pins[index - 1].focus();
    }
  });
});

// Step 5 Validation
next5.addEventListener("click", (e) => {
  e.preventDefault();
  let valid = true;
  // Check if at least one radio button is selected
  if (
    artYes.checked &&
    ![artNumber1, artNumber2, artNumber3, artNumber4].some(
      (input) => input.checked
    )
  ) {
    artNumberError.classList.remove("hidden"); // Show error if none are selected
    valid = false;
  } else {
    artNumberError.classList.add("hidden"); // Hide error if any radio button is selected
  }
  if (!artYes.checked && !artNo.checked) {
    artError.classList.remove("hidden"); // Show error if neither is selected
    valid = false; // Set valid to false if no option is selected
  } else {
    artError.classList.add("hidden"); // Hide error if any radio button is selected
  }

  // Proceed only if valid is true (if at least one radio button is selected)
  if (valid) {
    step5.classList.add("hidden");
    step6.classList.remove("hidden");
    progressBar.classList.remove("hidden");
    progressBar.querySelector(".progress_bar").style.width = `${
      (100 / 6) * 5
    }%`;
  }
});
artBoughtType.addEventListener("click", (e) => {
  console.log(artYes.checked);
  if (artYes.checked) {
    artworksNumberSection.classList.remove("hidden");
  } else {
    artworksNumberSection.classList.add("hidden");
  }
});
// Step 6 Validation
next6.addEventListener("click", (e) => {
  e.preventDefault();
  let valid = true;

  if (
    ![interest1, interest2, interest3, interest4, interest5].some(
      (input) => input.checked
    )
  ) {
    interestError.classList.remove("hidden"); // Show error if none are selected
    valid = false; // Set valid to false if no option is selected
  } else {
    interestError.classList.add("hidden"); // Hide error if any radio button is selected
  }

  if (valid) {
    step6.classList.add("hidden");
    step7.classList.remove("hidden");
    progressBar.classList.remove("hidden");
    progressBar.querySelector(".progress_bar").style.width = `${
      (100 / 6) * 6
    }%`;
  }
});
// Step 7 Validation
next7.addEventListener("click", (e) => {
  e.preventDefault();
  let valid = true;

  if (
    ![
      rangeValue1,
      rangeValue2,
      rangeValue3,
      rangeValue4,
      rangeValue5,
      rangeValue6,
      rangeValue7,
    ].some((input) => input.checked)
  ) {
    rangeError.classList.remove("hidden"); // Show error if none are selected
    valid = false; // Set valid to false if no option is selected
  } else {
    rangeError.classList.add("hidden"); // Hide error if any radio button is selected
  }

  if (valid) {
    const form = document.getElementById("customerForm");
    const formData = new FormData(form);

    // Convert form data to an object
    const data = {};
    const customerData = {};
    formData.forEach((value, key) => {
      customerData[key] = value;
      // Exclude specific fields from being added to the data object
      if (!["pin1", "pin2", "pin3", "pin4", "password"].includes(key)) {
        data[key] = value;
      }
    });

    console.log(data, customerData);
    createCustomer(data, customerData);

    step7.classList.add("hidden");
    step8.classList.remove("hidden");
    progressBar.classList.add("hidden");
  }
});

// Step Navigation
back.addEventListener("click", (e) => {
  e.preventDefault();
  let activeStep = document.querySelector(
    "[registrationmodal] .step:not(.hidden)"
  );
  activeStep.classList.add("hidden");
  activeStep.previousElementSibling.classList.remove("hidden");
});

// Final Submission
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("hidden");
});

function initAutocomplete() {
  document
    .getElementById("street")
    .addEventListener("input", async function () {
      let query = this.value;
      if (query.length < 3) return; // Avoid too many API calls

      let response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}&addressdetails=1`
      );
      let results = await response.json();

      let suggestionsList = document.getElementById("suggestions");
      suggestionsList.innerHTML = "";

      results.forEach((place) => {
        let li = document.createElement("li");
        li.innerText = place.display_name;
        li.addEventListener("click", function () {
          document.getElementById("street").value = place.display_name;
          suggestionsList.innerHTML = "";

          // Auto-fill address fields
          let address = place.address;
          console.log(address);
          //document.getElementById("street").value = address.road || "";
          document.getElementById("townCity").value =
            address.city ||
            address.city_district ||
            address.town ||
            address.village ||
            "";
          document.getElementById("postalCode").value = address.postcode || "";
          //document.getElementById("country").value = address.country || "";
        });
        suggestionsList.appendChild(li);
      });
    });
}

// Load the function after page load
window.onload = initAutocomplete;

async function smsSend() {
  let phoneNumberVal = `${mobileNumberCode.textContent.trim()}${phoneNumber.value.trim()}`;
  formatPhoneNumber(phoneNumberVal);
  let records = await api.twillioCredentials.findFirst();
  const accountSid = records?.accountSid?.trim();
  const authToken = records.authToken?.trim();
  const serviceSid = records.serviceSid?.trim();

  const url = `https://verify.twilio.com/v2/Services/${serviceSid}/Verifications`;

  const formData = new URLSearchParams();
  formData.append("To", phoneNumberVal);
  formData.append("Channel", "sms");

  await fetch(url, {
    method: "POST",
    headers: {
      Authorization: "Basic " + btoa(`${accountSid}:${authToken}`),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error("Error:", error));
}

//VERIFY OTP
const verifyOTP = async (otp, phoneNumber) => {
  let records = await api.twillioCredentials.findFirst();
  const accountSid = records?.accountSid?.trim();
  const authToken = records.authToken?.trim();
  const serviceSid = records.serviceSid?.trim();
  const url = `https://verify.twilio.com/v2/Services/${serviceSid}/VerificationCheck`;

  const formData = new URLSearchParams();
  formData.append("To", phoneNumber);
  formData.append("Code", otp);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: "Basic " + btoa(`${accountSid}:${authToken}`),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData,
  });

  const data = await response.json();

  if (data.status === "approved") {
    console.log("✅ OTP Verified Successfully!");
    return "true";
  } else {
    console.log("❌ Invalid OTP. Please try again.");
    return "false";
  }
};

function formatPhoneNumber(phoneNumber) {
  // Remove all non-numeric characters except '+'
  let digits = phoneNumber.replace(/\D/g, "");

  // // Ensure it starts with '+'
  if (digits.startsWith("33")) {
    digits = digits.replace(/^33/, countryCode.replace("+", "")); // Replace France (+33) with India (+91)
  }

  // // Format the number with spaces
  let formatted = digits.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})$/,
    `$1 $2 $3 $4`
  );
  document.querySelector(".phone_number_wrote").innerText = formatted;
  return formatted;
}

async function createCustomer(data, customerData) {
  const customerInfoRecord = await api.customerInfo.upsert(data);
  console.log(customerInfoRecord);
  await sendData(customerData);
}

async function checkCustomer() {
  const allRecords = [];
  let records = await api.customerInfo.findMany({
    first: 250,
    select: {
      id: true,
    },
    filter: {
      // add filter conditions, if possible
    },
  });

  allRecords.push(...records);

  // loop through additional pages to get all protected orders
  while (records.hasNextPage) {
    // paginate
    records = await records.nextPage();
    allRecords.push(...records);
  }
}

async function sendData(customerData) {
  const response = await fetch("/apps/cust-auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customerData),
  });

  const result = await response.json();
  console.log(result);
}

async function getData() {
  const response = await fetch("/apps/cust-auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ actionType: "getCustomer" }),
  });

  const result = await response.json();
  console.log(result);
}
getData();
