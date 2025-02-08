// Function to handle button clicks
function selectOption(option) {
    if (option === 'yes') {
        // Save current audio time before navigating
        var audio = document.getElementById("love-song");
        sessionStorage.setItem("audioTime", audio.currentTime);

        // Flash rainbow colors before redirecting
        flashRainbowColors(function () {
            window.location.href = "poem.html"; // Redirect to poem page
        });
    } else if (option === 'no') {
        // Change "No" button text
        document.getElementById('no-button').innerText = 'You sure?'; 
        
        // Increase "Yes" button size
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    }
}

// Function to flash rainbow colors
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function () {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function () {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset color
        if (callback) {
            callback();
        }
    }, 2000);
}

// Play music only after user interaction
document.getElementById("play-music").addEventListener("click", function () {
    var audio = document.getElementById("love-song");
    var savedTime = sessionStorage.getItem("audioTime");
    if (savedTime) {
        audio.currentTime = savedTime;
    }
    audio.play();
    this.style.display = "none"; // Hide button after clicking
});
