document.querySelector(".cross").style.display = "none";

document.querySelector(".hamburger").addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("sidebarGo");

    if (sidebar.classList.contains("sidebarGo")) {
        document.querySelector(".ham").style.display = "inline";
        document.querySelector(".cross").style.display = "none";

    } else {
        document.querySelector(".ham").style.display = "none";
        setTimeout(() => {
            document.querySelector(".cross").style.display = "inline";
        }, 350); // Delay the appearance of the cross sign
    }
});


// Function to handle the redirection
function redirectToAnotherPage() {
    // Specify the URL of the page you want to redirect to
    const targetPageUrl = 'contact.html'; // Replace with your desired URL

    // Redirect to the target page
    window.location.href = targetPageUrl;
}

// // Event listener for the button click
// const redirectButton = document.getElementById('redirectButton');
// redirectButton.addEventListener('click', redirectToAnotherPage);










