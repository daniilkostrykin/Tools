document.querySelectorAll('.card a').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем дефолтное поведение ссылки
    window.open(this.href, '_blank');
  });
});