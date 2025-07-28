window.onload = () => {
    console.log("Script Loaded...");

    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger');
    const hamIcon = document.querySelector('.ham');
    const crossIcon = document.querySelector('.cross');

    crossIcon.style.display = 'none';

    hamburger.addEventListener("click", () => {
        console.log("Hamburger clicked");
        sidebar.classList.toggle('sidebarGo');

        if (sidebar.classList.contains('sidebarGo')) {
            hamIcon.style.display = 'inline';
            crossIcon.style.display = 'none';
        } else {
            crossIcon.style.display = 'inline';
            setTimeout(() => {
                hamIcon.style.display = 'none';
            }, 300);
        }
    });
};

  function showSection(type) {
    const longSection = document.getElementById("longVideos");
    const shortSection = document.getElementById("shortVideos");

    if (type === "long") {
      longSection.style.display = "block";
      shortSection.style.display = "none";
    } else {
      longSection.style.display = "none";
      shortSection.style.display = "block";
    }
  }

