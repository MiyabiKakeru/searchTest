let submitted = false;
  document.getElementById('hidden_iframe').addEventListener('load', function() {
    if (submitted) {
      window.location.href = "https://miyabikakeru.github.io/searchtest/redirect/redirect.html";
    }
  });
