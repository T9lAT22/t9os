document.write("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    \r\n    <link rel=\"icon\" href=\"favicon2.ico\" type=\"image\/x-icon\">\r\n    \r\n<style>\r\n  .round-btn {\r\n    border-radius: 12px;\r\n    background-color: blue;\r\n    color: white;\r\n    text-decoration: none;\r\n    padding: 10px 20px;\r\n  }\r\n    .button:hover {\r\n  background-color: #3c68fa;\r\n  }\r\n<\/style>\r\n\r\n\r\n<script>\r\n  document.addEventListener(\"keydown\", function(event) {\r\n    if (event.key === \"k\") {\r\n      window.open(\"https:\/\/classroom.google.com\/?pli=1\");\r\n    }\r\n  });\r\n<\/script>\r\n\r\n\r\n \r\n\r\n<style>\r\n    .term {\r\n        position: fixed;\r\n     bottom: 0;\r\n     position: fixed;\r\n     left: 0;\r\n\r\n        \r\n    }\r\n<\/style>\r\n<style>\r\n    .git {\r\n        position: fixed;\r\n     bottom: 0;\r\n     position: fixed;\r\n     left: 90px;\r\n\r\n        \r\n    }\r\n<\/style>\r\n\r\n<style>\r\n    .v2 {\r\n        position: fixed;\r\n     bottom: 0;\r\n     position: fixed;\r\n     left: 150px;\r\n\r\n        \r\n    }\r\n<\/style>\r\n \r\n\r\n<div class=\"button-container\">\r\n  <a href=\"choose.html\">\r\n    <img src=\"apps.png\" alt=\"Button Image\">\r\n  <\/a>\r\n<\/div>\r\n\r\n <style>\r\n  img {\r\n    display: block;\r\n    margin: auto;\r\n    width: 35%; \/* change this value to adjust the size of the image *\/\r\n  }\r\n<\/style>\r\n\r\n\r\n\r\n\r\n<img src=\"os.png\" alt=\"Image\">\r\n\r\n<style>\r\n    .button-container {\r\n  position: fixed;\r\n  left: 50%;\r\n  bottom: 0;\r\n  transform: translateX(-50%);\r\n}\r\n\r\n.button-container img {\r\n  width: 79px; \/* Adjust this value as per your image size *\/\r\n}\r\n\r\n<\/style>\r\n\r\n\r\n<a href=\"tha97service.html\" style=\"position:fixed;bottom:10px;right:10px;padding:10px;border-radius:25px;background-color:#f1c40f;text-decoration:none;\">Admins page<\/a>\r\n<a href=\"terms.html\" class=\"term\">Terms of use<\/a>\r\n<a href=\"https:\/\/github.com\/T9LAT\/Sample-of-buttons\/tree\/main\" class=\"git\">Github<\/a>\r\n<a href=\"https:\/\/t9lat9.netfy.blog\/t9os.html\" class=\"v2\">V2<\/a>\r\n\r\n\r\n\r\n\r\n\r\n  <style>\r\n        .clock {\r\n            border: 2px solid black;\r\n            padding: 10px 20px;\r\n            display: inline-block;\r\n            color:white;\r\n            background-color:blue;\r\n            border-radius: 12px;\r\n            position: absolute;\r\n            top: 10px;\r\n            right: 10px;\r\n              transform: translateY(-25%);\r\n\r\n        }\r\n    <\/style>\r\n    \r\n      <div class=\"clock\" id=\"clock\"><\/div>\r\n      \r\n      <script>\r\n        function updateClock() {\r\n            var clock = document.getElementById(\"clock\");\r\n            var currentTime = new Date();\r\n            \r\n            \/\/ Set the time zone to New York\r\n            currentTime.toLocaleString(\"en-US\", {timeZone: \"America\/New_York\"});\r\n            \r\n            \/\/ Format the time as HH:MM:SS\r\n            var hours = currentTime.getHours().toString().padStart(2, '0');\r\n            var minutes = currentTime.getMinutes().toString().padStart(2, '0');\r\n            var seconds = currentTime.getSeconds().toString().padStart(2, '0');\r\n            \r\n            \/\/ Update the clock's content\r\n            clock.textContent = hours + \":\" + minutes + \":\" + seconds;\r\n        }\r\n        \r\n        \/\/ Call updateClock every second\r\n        setInterval(updateClock, 1000);\r\n    <\/script>\r\n      <style>\r\n    body {\r\n      background-image: url('star2.gif');\r\n    }\r\n  <\/style> \r\n    <style>body {background-color: black;}<\/style>\r\n    \r\n    <style>\r\n         .battery {\r\n            border: 2px solid black;\r\n            padding: 10px 20px;\r\n            display: inline-block;\r\n            color:white;\r\n            background-color:blue;\r\n            border-radius: 12px;\r\n            top: 10px;\r\n            right: 0;\r\n            right: 150px;\r\n            transform: translateY(-60%);\r\n            position: fixed;\r\n        }\r\n    <\/style>\r\n    \r\n \r\n <p class=\"battery\"  id=\"batteryPercentage\"><\/p>\r\n\r\n  <script>\r\n    \/\/ Check if Battery API is supported by the browser\r\n    if ('getBattery' in navigator) {\r\n      navigator.getBattery().then(function(battery) {\r\n        updateBatteryStatus(battery);\r\n\r\n        \/\/ Update battery status whenever it changes\r\n        battery.addEventListener('levelchange', function() {\r\n          updateBatteryStatus(battery);\r\n        });\r\n      });\r\n    } else {\r\n      document.getElementById('batteryPercentage').innerHTML = 'Battery API not supported.';\r\n    }\r\n\r\n    function updateBatteryStatus(battery) {\r\n      var percentage = Math.floor(battery.level * 100);\r\n      document.getElementById('batteryPercentage').innerHTML = percentage + '%';\r\n    }\r\n  <\/script>\r\n\r\n\r\n\r\n <style>\r\n    .button {\r\n      background-color: blue; \r\n      border: none;\r\n      color: white;\r\n      padding: 15px 32px;\r\n      text-align: center;\r\n      text-decoration: none;\r\n      display: inline-block;\r\n      font-size: 16px;\r\n      border-radius:25px;\r\n    }\r\n  <\/style>\r\n  \r\n  \r\n<script>function updateClock() {\r\n    const now = new Date();\r\n    let hours = now.getHours();\r\n    const minutes = now.getMinutes().toString().padStart(2, '0');\r\n    const seconds = now.getSeconds().toString().padStart(2, '0');\r\n\r\n    \/\/ Convert hours to 12-hour format\r\n    if (hours > 12) {\r\n        hours -= 12;\r\n    }\r\n\r\n    \/\/ Ensure that 12:00 is displayed correctly\r\n    if (hours === 0) {\r\n        hours = 12;\r\n    }\r\n\r\n    const timeString = `${hours}:${minutes}:${seconds}`;\r\n    document.getElementById('time').textContent = timeString;\r\n}\r\n\r\n\/\/ Update the clock immediately and then every second\r\nupdateClock();\r\nsetInterval(updateClock, 1000);\r\n<\/script>\r\n\r\n \r\n\r\n\r\n\r\n\r\n<div class=\"center\">\r\n  <p>\r\n      \r\n              <\/p>\r\n<\/div>\r\n  <title>T9 OS<\/title>");