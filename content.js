switch (window.location.hostname) {
  case "www.youtube.com":
    window.location.replace("http://127.0.0.1:5500/blocked.html");  
    break;

  case "www.facebook.com":
    window.location.replace("http://127.0.0.1:5500/blocked.html");
    break;

  case "www.netflix.com":
    window.location.replace("http://127.0.0.1:5500/blocked.html");
    break;
}