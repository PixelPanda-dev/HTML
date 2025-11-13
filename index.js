// Menu toggle functionality
const menuToggle = document.getElementById('menuToggle');
const sidebarMenu = document.getElementById('sidebarMenu');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarClose = document.getElementById('sidebarClose');

// Function to open sidebar
function openSidebar() {
    sidebarMenu.classList.add('active');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Function to close sidebar
function closeSidebar() {
    sidebarMenu.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Open sidebar when hamburger menu is clicked
menuToggle.addEventListener('click', function() {
    openSidebar();
});

// Close sidebar when close button is clicked
sidebarClose.addEventListener('click', function() {
    closeSidebar();
});

// Close sidebar when overlay is clicked
sidebarOverlay.addEventListener('click', function() {
    closeSidebar();
});

// Close sidebar when clicking on a link (optional)
const sidebarLinks = document.querySelectorAll('.sidebar-nav-link, .sidebar-button');
sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
        closeSidebar();
    });
});

