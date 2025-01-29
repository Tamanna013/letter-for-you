document.addEventListener("DOMContentLoaded", function() {
    const envelope = document.querySelector(".love-envelope");
    envelope.addEventListener("click", function() {
        this.classList.toggle("open");
    });
});