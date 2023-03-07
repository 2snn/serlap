const text = document.querySelector("div .text");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
document.querySelectorAll("div .text span").forEach((letter) => {
    letter.addEventListener("mouseover", () => {
        letter.classList.add("active");
    });
});
