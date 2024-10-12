// Show / Hide Search Input Field
// 1. Get search btns

let searchClickBig = document.querySelector(".nav-right-search");
let searchClickSmall = document.querySelector(".responsive-right-search-icon");
let searchClickCancel = document.querySelector(".search-input-cancel");

// 2. Get Nav-bar-normal-view, nav-bar-responsive, nav-bar-search

let menuBig = document.querySelector(".nav-bar");
let menuSmall = document.querySelector(".nav-bar-responsive");
let menuSearchInput = document.querySelector(".nav-bar-search");

menuSearchInput.style.display = "none";

// 3. Add event listeners

searchClickBig.addEventListener('click', function() {
    menuBig.style.display = "none";
    menuSmall.style.display = "none";
    menuSearchInput.style.display = "flex";
});

searchClickSmall.addEventListener('click', function() {
    menuBig.style.display = "none";
    menuSmall.style.display = "none";
    menuSearchInput.style.display = "flex";
});

searchClickCancel.addEventListener('click', function() {
    if (window.innerWidth >=1024) {
        menuBig.style.display = "flex";
        menuSmall.style.display = "none";
        menuSearchInput.style.display = "none";
    } else {
        menuBig.style.display = "none";
        menuSmall.style.display = "flex";
        menuSearchInput.style.display = "none";
    }
});

// TAB Menu Show/Hide
// 1. Get the Menu Buttons
let womenBtn = document.getElementById("btn-menu-women");
let menBtn = document.getElementById("btn-menu-men");
let newArrivalsBtn = document.getElementById("btn-menu-new-arrivals");
let lastChanceBtn = document.getElementById("btn-menu-last-chance");

// 2. Get the TAB-BY-TAB Menus
let womenTab = document.getElementById("tab-women");
let menTab = document.getElementById("tab-men");
let newArrivalsTab = document.getElementById("tab-new-arrivals");
let lastChanceTab = document.getElementById("tab-last-chance");

// 3. Initial HIDE the TAB-BY-TAB Menus
womenTab.style.display = "none";
menTab.style.display = "none";
newArrivalsTab.style.display = "none";
lastChanceTab.style.display = "none";

// 4. Show the tab menus when hovering over the buttons or the tab menus itself

function showWomenTab() {
    womenTab.style.display = "flex";
};

function showMenTab() {
    menTab.style.display = "flex";
};

function showNewArrivalsTab() {
    newArrivalsTab.style.display = "flex";
};

function showLastChanceTab() {
    lastChanceTab.style.display = "flex";
};

// 5. Hide the tab menus when the mouse leaves both the buttons and the tab menus

function hideWomenTab() {
    womenTab.style.display = "none";
};

function hideMenTab() {
    menTab.style.display = "none";
};

function hideNewArrivalsTab() {
    newArrivalsTab.style.display = "none";
};

function hideLastChanceTab() {
    lastChanceTab.style.display = "none";
};

// 6. Event listeners for Menu BTNs
womenBtn.addEventListener('mouseover', showWomenTab);
womenBtn.addEventListener('mouseleave', function() {
    setTimeout(function() {
        if(!womenTab.matches(':hover')) {
            hideWomenTab();
        }
    }, 100);
});

menBtn.addEventListener('mouseover', showMenTab);
menBtn.addEventListener('mouseleave', function() {
    setTimeout(function() {
        if(!menTab.matches(':hover')) {
            hideMenTab();
        }
    }, 100);
});

newArrivalsBtn.addEventListener('mouseover', showNewArrivalsTab);
newArrivalsBtn.addEventListener('mouseleave', function() {
    setTimeout(function() {
        if(!newArrivalsTab.matches(':hover')) {
            hideNewArrivalsTab();
        }
    }, 100);
});

lastChanceBtn.addEventListener('mouseover', showLastChanceTab);
lastChanceBtn.addEventListener('mouseleave', function() {
    setTimeout(function() {
        if(!lastChanceTab.matches(':hover')) {
            hideLastChanceTab();
        }
    }, 100);
});

// 7.  Event Listeners for TAB MENUS
womenTab.addEventListener('mouseover', showWomenTab);
womenTab.addEventListener('mouseleave', function() {
    hideWomenTab();
});

menTab.addEventListener('mouseover', showMenTab);
menTab.addEventListener('mouseleave', function() {
    hideMenTab();
});

newArrivalsTab.addEventListener('mouseover', showNewArrivalsTab);
newArrivalsTab.addEventListener('mouseleave', function() {
    hideNewArrivalsTab();
});

lastChanceTab.addEventListener('mouseover', showLastChanceTab);
lastChanceTab.addEventListener('mouseleave', function() {
    hideLastChanceTab();
});

// Open / Close Burger Menu Responsive

// 1. Get Open and Close Burger Btns
let openBurgerBtn = document.querySelector(".nav-bar-responsive-left-open");
let closeBurgerBtn = document.querySelector(".nav-bar-responsive-left-close");

let responsiveMenu = document.querySelector(".tabs-responsive-menu");

// 2. Initially hide close burger btn and responsive menu
closeBurgerBtn.style.display = "none";
responsiveMenu.style.display = "none";

// 3. Add a Mouse Event to Open/Close Responsive Menu
openBurgerBtn.addEventListener('click', function() {
    openBurgerBtn.style.display = "none";
    closeBurgerBtn.style.display = "flex";
    responsiveMenu.style.display = "flex";
});

closeBurgerBtn.addEventListener('click', function() {
    openBurgerBtn.style.display = "flex";
    closeBurgerBtn.style.display = "none";
    responsiveMenu.style.display = "none";
    womenDropdownTab.style.display = "none";
    menDropdownTab.style.display = "none";
    newArrivalsDropdownTab.style.display = "none";
    lastChanceDropdownTab.style.display = "none";
})

// Open / Close FOUR Tabs from Responsive Menu

// 1. Get FOUR Tabs BTNs
let womenResponsiveBtn = document.getElementById("btn-responsive-women");
let menResponsiveBtn = document.getElementById("btn-responsive-men");
let newArrivalsResponsiveBtn = document.getElementById("btn-responsive-new-arrivals");
let lastChanceResponsiveBtn = document.getElementById("btn-responsive-last-chance");

// 2. Get FOUR BACK arrows
let womenBackArrow = document.getElementById("back-arrow-women");
let menBackArrow = document.getElementById("back-arrow-men");
let newArrivalsBackArrow = document.getElementById("back-arrow-new-arrivals");
let lastChanceBackArrow = document.getElementById("back-arrow-last-chance");

// 3. Get FOUR DropDown Tabs Menus
let womenDropdownTab = document.getElementById("dropdown-tab-women");
let menDropdownTab = document.getElementById("dropdown-tab-men");
let newArrivalsDropdownTab = document.getElementById("dropdown-tab-new-arrivals");
let lastChanceDropdownTab = document.getElementById("dropdown-tab-last-chance");

// 4. Initial HIDE DropDown Tabs Menus
womenDropdownTab.style.display = "none";
menDropdownTab.style.display = "none";
newArrivalsDropdownTab.style.display = "none";
lastChanceDropdownTab.style.display = "none";

// 5. Add mouse Events to Open and Close DropDown Tabs Menus
// a. Women Tab
womenResponsiveBtn.addEventListener('click', function() {
    womenDropdownTab.style.display = "flex";
    responsiveMenu.style.display = "none";
});

womenBackArrow.addEventListener('click', function() {
    womenDropdownTab.style.display = "none";
    responsiveMenu.style.display = "flex";
});

// b. Men Tab
menResponsiveBtn.addEventListener('click', function() {
    menDropdownTab.style.display = "flex";
    responsiveMenu.style.display = "none";
});

menBackArrow.addEventListener('click', function() {
    menDropdownTab.style.display = "none";
    responsiveMenu.style.display = "flex";
});

// c. New Arrivals Tab
newArrivalsResponsiveBtn.addEventListener('click', function() {
    newArrivalsDropdownTab.style.display = "flex";
    responsiveMenu.style.display = "none";
});

newArrivalsBackArrow.addEventListener('click', function() {
    newArrivalsDropdownTab.style.display = "none";
    responsiveMenu.style.display = "flex";
});

// d. Last Chance Tab
lastChanceResponsiveBtn.addEventListener('click', function() {
    lastChanceDropdownTab.style.display = "flex";
    responsiveMenu.style.display = "none";
});

lastChanceBackArrow.addEventListener('click', function() {
    lastChanceDropdownTab.style.display = "none";
    responsiveMenu.style.display = "flex";
});

// Show / Hide Signin Popup Window

// 1. Get Signin BTNs from nav-bar and responsive-bar
let signinNavbarBtn = document.querySelector(".nav-right-signin");
let signinResponsiveBtn = document.querySelector(".responsive-right-signin-icon");
let signinSearchbarBtn = document.querySelector(".search-input-signin");

// 2. Get Signin Popup Window
let signinPopupWindow = document.querySelector(".signin-popup-window");

// 3. Initially Hide Signin Popup Window
signinPopupWindow.style.display = "none";

// 4. Add Mouse Events to the Signin BTNs
// a. Show Signin Popup Window
function showSigninPopup() {
    signinPopupWindow.style.display = "flex";
}

signinNavbarBtn.addEventListener('mouseover', showSigninPopup);
signinResponsiveBtn.addEventListener('mouseover', showSigninPopup);
signinSearchbarBtn.addEventListener('mouseover', showSigninPopup);

// b. Hide Signin Popup Window when mouse leaves the button and the popup
function hideSigninPopup() {
    setTimeout(function() {
        if (!signinNavbarBtn.matches(':hover') && !signinResponsiveBtn.matches(':hover') && !signinSearchbarBtn.matches(':hover') && !signinPopupWindow.matches(':hover')) {
            signinPopupWindow.style.display = "none";
        }
    }, 100); // small delay to allow smooth transition
}

signinNavbarBtn.addEventListener('mouseleave', hideSigninPopup);
signinResponsiveBtn.addEventListener('mouseleave', hideSigninPopup);
signinSearchbarBtn.addEventListener('mouseleave', hideSigninPopup);
signinPopupWindow.addEventListener('mouseleave', hideSigninPopup);

// c. Keep popup shown if mouse is over the popup
signinPopupWindow.addEventListener('mouseover', showSigninPopup);

// OPEN / CLOSE Signin Container
// 1. Get Signin Btns Elements
let signinNormalViewClick = document.querySelector(".nav-right-signin");
let signinSmallViewClick = document.querySelector(".responsive-right-signin-icon");
let signinPopupWindowClick = document.querySelector(".popup-signin-CTA");

// 2. Get Signin Container
let signinContainer = document.querySelector(".signin-container");

// 3. Add mouse events to open the signin container
// a. mouse click event on signin icon in normal view window
signinNormalViewClick.addEventListener('click', function() {
    signinContainer.style.display = "flex";
});

// b. mouse click event on signin icon in small view window
signinSmallViewClick.addEventListener('click', function() {
    signinContainer.style.display = "flex";
});

// c. mouse click event on popup window signin button
signinPopupWindowClick.addEventListener('click', function() {
    signinContainer.style.display = "flex";
});

// HIDE ALL CONTAINERS WHEN CLICK SIGNIN BTNS

// 1. Get ALL containers from MAIN div
promoContainer = document.querySelector(".promo-container");
extraDiscountContainer = document.querySelector(".extra-discount-container");
notebookContainer = document.querySelector(".notebook-look-container");
carouselWomenContainer = document.getElementById("carousel-container-women");
carouselMenContainer = document.getElementById("carousel-container-men");
essentialWomen = document.getElementById("women-essentials");
arrivalsContainer = document.querySelector(".arrivals-container");
footerContainer = document.querySelector(".footer-four-columns");

// 2. Add mouse events to the Signin BtnS to HIDE all containers
signinNavbarBtn.addEventListener('click', function() {
    promoContainer.style.display = "none";
    extraDiscountContainer.style.display = "none";
    notebookContainer.style.display = "none";
    carouselWomenContainer.style.display = "none";
    carouselMenContainer.style.display = "none";
    essentialWomen.style.display = "none";
    arrivalsContainer.style.display = "none";
    footerContainer.style.display = "none";
});

signinResponsiveBtn.addEventListener('click', function() {
    promoContainer.style.display = "none";
    extraDiscountContainer.style.display = "none";
    notebookContainer.style.display = "none";
    carouselWomenContainer.style.display = "none";
    carouselMenContainer.style.display = "none";
    essentialWomen.style.display = "none";
    arrivalsContainer.style.display = "none";
    footerContainer.style.display = "none";
});

signinSearchbarBtn.addEventListener('click', function() {
    promoContainer.style.display = "none";
    extraDiscountContainer.style.display = "none";
    notebookContainer.style.display = "none";
    carouselWomenContainer.style.display = "none";
    carouselMenContainer.style.display = "none";
    essentialWomen.style.display = "none";
    arrivalsContainer.style.display = "none";
    footerContainer.style.display = "none";
});

signinPopupWindow.addEventListener('click', function() {
    promoContainer.style.display = "none";
    extraDiscountContainer.style.display = "none";
    notebookContainer.style.display = "none";
    carouselWomenContainer.style.display = "none";
    carouselMenContainer.style.display = "none";
    essentialWomen.style.display = "none";
    arrivalsContainer.style.display = "none";
    footerContainer.style.display = "none";
});



// SIGNIN CONTAINER FUNCTIONALITY

// 1. Get the email/password title
let emailSigninTitle = document.querySelector(".signin-email-title");
let passwordSigninTitle = document.querySelector(".signin-password-title");

// Initially Hide the Titles
emailSigninTitle.style.display = "none";
passwordSigninTitle.style.display = "none";

// 2. Get the email/password notification
let emailSigninNotification = document.querySelector(".signin-email-notification");
let passwordSigninNotification = document.querySelector(".signin-password-notification");

// Initially Hide the Notifications
emailSigninNotification.style.display = "none";
passwordSigninNotification.style.display = "none";

// 3. Get the email/password input field
let emailSigninInput = document.querySelector(".signin-email-field");
let passwordSigninInput = document.querySelector(".signin-password-field");

// 4. Get show / hide eye icon
let eyeSigninShow = document.querySelector(".signin-show-password-icon");
let eyeSigninHide = document.querySelector(".signin-hide-password-icon");

// Initially hide the hide eye
eyeSigninHide.style.display = "none";

// 5. Get Signin Btn from Signin Container
let signinBtnSigninCont = document.querySelector(".signin-btn-CTA-signin");

// 6. Get Register Btn from Signin Container
let registerBtnSigninCont = document.querySelector(".signin-btn-CTA-register");

// 7. Get Registration Container
let registrationContainer = document.querySelector(".register-container");

// 8. Get Forgot Password Container
let forgotPassCont = document.querySelector(".forgot-password-container");

// 9. Get Forgot Password BTN
let forgotPassBtn = document.querySelector(".signin-footer");

// 10. Add Mouse Events

// 10.1. Show Email / Password Title when mouse is clicked in email and password field
emailSigninInput.addEventListener('click', function() {
    emailSigninTitle.style.display = "flex";
    passwordSigninTitle.style.display = "none";
    // Check if the email field is empty
    if (emailSigninInput.value === "") {
        emailSigninNotification.style.display = "flex";
        passwordSigninNotification.style.display = "none";
    } else {
        emailSigninNotification.style.display = "none";
    }
});

passwordSigninInput.addEventListener('click', function() {
    emailSigninTitle.style.display = "none";
    passwordSigninTitle.style.display = "flex";
    // Check if the password field is empty
    if (passwordSigninInput.value === "") {
        emailSigninNotification.style.display = "none";
        passwordSigninNotification.style.display = "flex";
    } else {
        passwordSigninNotification.style.display = "none";
    }
});

// 10.2. Show / Hide password when mouse is clicked on the show/hide eye
eyeSigninShow.addEventListener('click', function() {
    passwordSigninInput.type = "text";
    eyeSigninShow.style.display = "none";
    eyeSigninHide.style.display = "flex";
});

eyeSigninHide.addEventListener('click', function() {
    passwordSigninInput.type = "password";
    eyeSigninHide.style.display = "none";
    eyeSigninShow.style.display = "flex";
});

// 10.3 Add mouse event to the signin BTN in signin container
signinBtnSigninCont.addEventListener('click', function() {
    signinContainer.style.display = "none";
});

// 10.4 Add mouse event to the create account BTN in the signin container
registerBtnSigninCont.addEventListener('click', function() {
    registrationContainer.style.display = "flex";
});

// 10.5 Add mouse event to the forgot password BTN in the signin container
forgotPassBtn.addEventListener('click', function() {
    forgotPassCont.style.display = "flex";
    signinContainer.style.display = "none";
});

// 11. Add a mouse event to the Signin BtnS in the Signin Container to SHOW all containers
signinBtnSigninCont.addEventListener('click', function() {
    promoContainer.style.display = "flex";
    extraDiscountContainer.style.display = "flex";
    notebookContainer.style.display = "flex";
    carouselWomenContainer.style.display = "flex";
    carouselMenContainer.style.display = "flex";
    essentialWomen.style.display = "flex";
    arrivalsContainer.style.display = "flex";
    footerContainer.style.display = "flex";
});

// OPEN / CLOSE REGISTRATION CONTAINER
// 1. Get email/password/phone INPUT Fields
let emailRegisterInput = document.querySelector(".register-email-field");
let passwordRegisterInput = document.querySelector(".register-password-field");
let phoneRegisterInput = document.querySelector(".register-phone-field");

// 2. Get the email/password/phone TITLES
let emailRegisterTitle = document.querySelector(".register-email-title");
let passwordRegisterTitle = document.querySelector(".register-password-title");
let phoneRegisterTitle = document.querySelector(".register-phone-title");

// Initially HIDE the TITLES
emailRegisterTitle.style.display = "none";
passwordRegisterTitle.style.display = "none";
phoneRegisterTitle.style.display = "none";

// 3. Get the email/password/phone NOTIFICATIONS
let emailRegisterNote = document.querySelector(".register-email-notification");
let passwordRegisterNote = document.querySelector(".register-password-notification");
let phoneRegisterNote = document.querySelector(".register-phone-notification");

// Initially HIDE the NOTIFICATIONS
emailRegisterNote.style.display = "none";
passwordRegisterNote.style.display = "none";
phoneRegisterNote.style.display = "none";

// 4. Get Show / Hide EYES
let showRegisterEye = document.querySelector(".register-show-password-icon");
let hideRegisterEye = document.querySelector(".register-hide-password-icon");

// Initially HIDE the hide eye
hideRegisterEye.style.display = "none";

// 5. Get a Create account BTN from the Register Container
let createAccBtnRegisterCont = document.querySelector(".register-CTA");

// 5. Get Signin BTN from Register Container
let signinBtnRegister = document.querySelector(".register-footer-right");

// 6. Get Registration THANKS Container
let confirmRegistrationCont = document.querySelector(".registration-thanks-container");

// 7. Get Verification MAIL Span
let emailVerificationSpan  = document.querySelector(".registered-email");

// 8. Get Return to Signin BTN from THANKS Registration Container
let signReturnBtnThanksCont = document.querySelector(".thanks-container-to-signin-container");

// 9. Get Privacy Policy Btn and Terms and conditions Btn
let privacyBtn = document.getElementById("privacy-policy");
let termsBtn = document.getElementById("terms-and-conditions");

// 10. Get Privacy Policy Container and Terms and conditions Container
let privacyContainer = document.querySelector(".privacy-policy-container");
let termsContainer = document.querySelector(".terms-and-conditions-container");

// 11. Get Back to registration Btns
let backRegistPrivacy = document.querySelector(".privacy-back-to-register");
let backRegistTerms = document.querySelector(".terms-back-to-register");

// 12. Get the Register Btn from the Popup Window
let registerPopupBtn = document.querySelector(".popup-register-right");

// 13. Add Mouse Events

// 13.1. Show / Hide email/password titles
emailRegisterInput.addEventListener('click', function() {
    emailRegisterTitle.style.display = "flex";
    passwordRegisterTitle.style.display = "none";
    phoneRegisterTitle.style.display = "none";
    if (emailRegisterInput.value === "") {
        emailRegisterNote.style.display = "flex";
        passwordRegisterNote.style.display = "none";
        phoneRegisterNote.style.display = "none";
    } else {
        emailRegisterNote.style.display = "none";
    }
});

passwordRegisterInput.addEventListener('click', function() {
    emailRegisterTitle.style.display = "none";
    passwordRegisterTitle.style.display = "flex";
    phoneRegisterTitle.style.display = "none";
    if (passwordRegisterInput.value === "") {
        emailRegisterNote.style.display = "none";
        passwordRegisterNote.style.display = "flex";
        phoneRegisterNote.style.display = "none";
    } else {
        passwordRegisterNote.style.display = "none";
    }
});

phoneRegisterInput.addEventListener('click', function() {
    emailRegisterTitle.style.display = "none";
    passwordRegisterTitle.style.display = "none";
    phoneRegisterTitle.style.display = "flex";
    if (phoneRegisterInput.value === "") {
        emailRegisterNote.style.display = "none";
        passwordRegisterNote.style.display = "none";
        phoneRegisterNote.style.display = "flex";
    } else {
        phoneRegisterNote.style.display = "none";
    }
});

// 13.2 Show / Hide password when mouse is clicked on the show/hide eye
showRegisterEye.addEventListener('click', function() {
    passwordRegisterInput.type = "text";
    showRegisterEye.style.display = "none";
    hideRegisterEye.style.display = "flex";
});

hideRegisterEye.addEventListener('click', function() {
    passwordRegisterInput.type = "password";
    hideRegisterEye.style.display = "none";
    showRegisterEye.style.display = "flex";
});

// 13.3. Add a mouse event to the Create Account BTN in the Register Container
createAccBtnRegisterCont.addEventListener('click', function() {
    confirmRegistrationCont.style.display = "flex";
    registrationContainer.style.display = "none";
    signinContainer.style.display = "none";
    emailVerificationSpan.textContent = emailRegisterInput.value;
})

// 13.4. Add a mouse events when signin BTN in the Register Container is clicked
signinBtnRegister.addEventListener('click', function() {
    signinContainer.style.display = "flex";
    registrationContainer.style.display = "none";
});

// 13.5. Add a mouse event to the Return to Signin BTN in the THANKS Registration Container
signReturnBtnThanksCont.addEventListener('click', function() {
    signinContainer.style.display = "flex";
    confirmRegistrationCont.style.display = "none";
});

// 13.6. Add a mouse event to the Privacy Policy and Terms and Conditions Btn
privacyBtn.addEventListener('click', function() {
    privacyContainer.style.display = "flex";
    registrationContainer.style.display = "none"
});

termsBtn.addEventListener('click', function() {
    termsContainer.style.display = "flex";
    registrationContainer.style.display = "none"
});

// 13.7. Add a mouse event to the back-to-register container from privacy policy and terms and conditions containers
backRegistPrivacy.addEventListener('click', function() {
    privacyContainer.style.display = "none";
    registrationContainer.style.display = "flex"
});

backRegistTerms.addEventListener('click', function() {
    termsContainer.style.display = "none";
    registrationContainer.style.display = "flex"
});

// 13.8. Add a mouse event to the register Btn from the Popup Window
registerPopupBtn.addEventListener('click', function() {
    registrationContainer.style.display = "flex";
});

// FORGOT and RESET Password Container Functionality

// 1. Get the Forgot Password Container
let forgotPasswordCont = document.querySelector(".forgot-password-container");

// 2. Get the Reset Password Container
let resetPasswordCont = document.querySelector(".reset-password-container");

// 3. Get BTNs from the Forgot Password Container
// 3.a. Get the Request Reset Link Btn
let requestResetLink = document.querySelector(".forgot-password-reset-CTA");

// 3.b. Get the Back to Signin Btn
let backToSignin = document.querySelector(".forgot-password-back-signin-cont");

// 4. Get the Signin Btn from the Reset Password Container
let goToSigninFromResetCont = document.querySelector(".reset-password-reset-CTA");

// 5. Add mouse events
// 5.1. add a mouse event to the Request Reset Link Btn
requestResetLink.addEventListener('click', function() {
    forgotPasswordCont.style.display = "none";
    resetPasswordCont.style.display = "flex";
});

goToSigninFromResetCont.addEventListener('click', function() {
    resetPasswordCont.style.display = "none";
    signinContainer.style.display = "flex"
});

backToSignin.addEventListener('click', function() {
    forgotPasswordCont.style.display = "none";
    signinContainer.style.display = "flex"
});



// Functionality for Women Carousel
const womenImages = document.querySelectorAll('#carousel-container-women .carousel-right-product-card');
const womenLeftBtn = document.querySelector('#carousel-container-women .carousel-btn:first-child');
const womenRightBtn = document.querySelector('#carousel-container-women .carousel-btn:last-child');
let womenCurrentIndex = 0;

// Update women carousel display
function updateWomenCarousel() {
    womenImages.forEach((image, index) => {
        // Show 3 images at a time, starting from womenCurrentIndex
        if (index >= womenCurrentIndex && index < womenCurrentIndex + 3) {
            image.style.display = 'flex';
        } else {
            image.style.display = 'none';
        }
    });
}

// Event listeners for women carousel buttons
womenLeftBtn.addEventListener('click', () => {
    womenCurrentIndex = (womenCurrentIndex - 1 + womenImages.length) % womenImages.length;
    updateWomenCarousel();
});

womenRightBtn.addEventListener('click', () => {
    womenCurrentIndex = (womenCurrentIndex + 1) % womenImages.length;
    updateWomenCarousel();
});

// Initialize the women carousel
updateWomenCarousel();


// Functionality for Men Carousel
const menImages = document.querySelectorAll('#carousel-container-men .carousel-right-product-card');
const menLeftBtn = document.querySelector('#carousel-container-men .carousel-btn:first-child');
const menRightBtn = document.querySelector('#carousel-container-men .carousel-btn:last-child');
let menCurrentIndex = 0;

// Update men carousel display
function updateMenCarousel() {
    menImages.forEach((image, index) => {
        // Show 3 images at a time, starting from menCurrentIndex
        if (index >= menCurrentIndex && index < menCurrentIndex + 3) {
            image.style.display = 'flex';
        } else {
            image.style.display = 'none';
        }
    });
}

// Event listeners for men carousel buttons
menLeftBtn.addEventListener('click', () => {
    menCurrentIndex = (menCurrentIndex - 1 + menImages.length) % menImages.length;
    updateMenCarousel();
});

menRightBtn.addEventListener('click', () => {
    menCurrentIndex = (menCurrentIndex + 1) % menImages.length;
    updateMenCarousel();
});

// Initialize the men carousel
updateMenCarousel();

// Function to initialize the carousel
function initCarousel() {
    // Get all image containers for women product cards
    const carousels = document.querySelectorAll('.pc-top-left, .pc-top-right, .pc-bottom-left, .pc-bottom-right');

    carousels.forEach(carousel => {
        // Get all images within the carousel
        const images = carousel.querySelectorAll('.img-small-women');
        let currentImageIndex = 0;

        // Show the first image initially
        images[currentImageIndex].style.display = 'block';

        // Get the next and previous buttons
        const nextBtn = carousel.querySelector('.small-img-CTA-next-top-left, .small-img-CTA-next-top-right, .small-img-CTA-next-bottom-left, .small-img-CTA-next-bottom-right');
        const prevBtn = carousel.querySelector('.small-img-CTA-previous-top-left, .small-img-CTA-previous-top-right, .small-img-CTA-previous-bootom-left, .small-img-CTA-previous-bottom-right');

        // Add event listeners for next and previous buttons
        nextBtn.addEventListener('click', () => {
            // Hide the current image
            images[currentImageIndex].style.display = 'none';

            // Increment the index and wrap around if needed
            currentImageIndex = (currentImageIndex + 1) % images.length;

            // Show the next image
            images[currentImageIndex].style.display = 'block';
        });

        prevBtn.addEventListener('click', () => {
            // Hide the current image
            images[currentImageIndex].style.display = 'none';

            // Decrement the index and wrap around if needed
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;

            // Show the previous image
            images[currentImageIndex].style.display = 'block';
        });
    });
}

// Initialize the carousel on page load
document.addEventListener('DOMContentLoaded', initCarousel);

// NEW ARRIVALS FUNCTIONALITY

document.addEventListener('DOMContentLoaded', () => {
    // Function to initialize the carousel for each product card
    function initCarousel(container) {
        const images = container.querySelectorAll('img');
        const prevButton = container.querySelector('.arrivals-btn-previous');
        const nextButton = container.querySelector('.arrivals-btn-next');

        let currentIndex = 0;

        // Function to show the current image and hide the others
        function updateImages() {
            images.forEach((img, index) => {
                img.classList.toggle('arrivals-img-shown', index === currentIndex);
                img.classList.toggle('arrivals-img-hidden', index !== currentIndex);
            });
        }

        // Event listener for the previous button
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length; // wrap around
            updateImages();
        });

        // Event listener for the next button
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length; // wrap around
            updateImages();
        });

        // Initialize the carousel by showing the first image
        updateImages();
    }

    // Get all carousel containers and initialize them
    const carousels = document.querySelectorAll('.arrivals-pc-img-section');
    carousels.forEach(initCarousel);
});

