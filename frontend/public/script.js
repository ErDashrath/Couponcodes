document.querySelector('a[href="#contact"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
  