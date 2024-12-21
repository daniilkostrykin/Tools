document.querySelectorAll(".card-icon").forEach(function (icon) {
  icon.addEventListener("click", function () {
    const link = icon.closest(".card").querySelector("a");
    if (link) {
      window.open(link.href, "_blank");
    }
  });
});
