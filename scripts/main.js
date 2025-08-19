window.addEventListener('DOMContentLoaded', function() {
    var toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;
    var body = document.body;
    var header = document.querySelector('header');
    var footer = document.querySelector('footer');
    var main = document.querySelector('main');
    var headings = document.querySelectorAll('h2');
    toggleBtn.onclick = function() {
        body.classList.toggle('dark-mode');
        if (header) header.classList.toggle('dark-mode');
        if (footer) footer.classList.toggle('dark-mode');
        if (main) main.classList.toggle('dark-mode');
        headings.forEach(function(h) { h.classList.toggle('dark-mode'); });
        toggleBtn.textContent = body.classList.contains('dark-mode') ? '☀️ Switch Theme' : '🌙 Switch Theme';
    };
});