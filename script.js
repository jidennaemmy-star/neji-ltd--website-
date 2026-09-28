document
    .getElementById("quoteForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name = this.name.value.trim();
        const email = this.email.value.trim();
        const phone = this.phone.value.trim();
        const service = this.service.value;
        const message = this.message.value.trim();

        const whatsappMessage =
            "Hello NEJI LTD,%0A%0A" +
            "I would like to request a quote.%0A%0A" +
            "Name: " + encodeURIComponent(name) + "%0A" +
            "Email: " + encodeURIComponent(email) + "%0A" +
            "Phone: " + encodeURIComponent(phone) + "%0A" +
            "Service: " + encodeURIComponent(service) + "%0A" +
            "Project Details: " + encodeURIComponent(message);

        const whatsappURL =
            "https://wa.me/250794000859?text=" +
            whatsappMessage;

        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );

        this.reset();

    });