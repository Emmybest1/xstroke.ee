window.addEventListener("DOMContentLoaded", () => {
    const acceptanceButton = document.querySelector(".acceptance__button");
    const declineButton = document.querySelector(".decline__button");

    ///Accept Terms
    acceptanceButton.addEventListener("click", (_) => {
        window.localStorage.setItem("acceptTerms", true);
        window.location.replace("/login");
    });

    /// Decline Terms
    declineButton.addEventListener("click", (_) => {
        window.localStorage.setItem("acceptTerms", false);
        window.location.replace("/index");
    });
});
