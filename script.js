document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(document.getElementById("form"));
    var formDataString = new URLSearchParams(formData).toString();

    let clickId = ""
    clickId = new URLSearchParams(window.location.search).get("click_id");

    window.location.href = "https://matheus-from-irev.github.io/third_page/?" + formDataString + "&click_id=" + clickId;
  });
