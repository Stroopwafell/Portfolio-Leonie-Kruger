document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const popup = document.getElementById("success-popup");
    const closePopup = document.getElementById("close-popup");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                popup.classList.remove("hidden");
                popup.classList.add("visible");
                form.reset();
            } else {
                alert("Er is iets misgegaan. Probeer het later opnieuw.");
            }
        } catch (error) {
            alert("Er is een fout opgetreden. Controleer je internetverbinding en probeer het opnieuw.");
        }
    });

    closePopup.addEventListener("click", () => {
        popup.classList.remove("visible");
        popup.classList.add("hidden"); 
    });
});