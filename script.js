document.getElementById("form").addEventListener("submit", function(event) {
    
    var postback = "https://demo-igaming.irev.com/backend/api/v3/goal-type-fire/14?hash=REPLACE"
    var redirectionPage = "https://matheus-from-irev.github.io/third_page/"

    var formData = new FormData(document.getElementById("form"));
    var formDataString = new URLSearchParams(formData).toString();
    const clickId = new URLSearchParams(window.location.search).get("click_id");
    event.preventDefault();
    postback = postback.replace("REPLACE", clickId);
    fetch(postback);
    window.location.href = redirectionPage + "?" + formDataString + "&click_id=" + clickId;
  });
