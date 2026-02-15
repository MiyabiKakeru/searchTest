let submitted = false;
  document.getElementById('hidden_iframe').addEventListener('load', function() {
    if (submitted) {
      window.location.href = "https://miyabikakeru.github.io/searchtest/redirect/redirect.html";
    }
  });
document.querySelector("button").addEventListener("click", () =>  {
    location.href = `https://www.google.com/search?q=${document.querySelector("input").value}`;
})
