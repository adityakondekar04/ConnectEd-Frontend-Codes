// DOM Elements
const searchInput = document.querySelector('.search-bar input');
const notifications = document.querySelector('.notifications');
const userProfile = document.querySelector('.user-profile');
const navLinks = document.querySelectorAll('.nav-links a');
const logoutBtn = document.querySelector('.logout-btn');
const sessionCards = document.querySelectorAll('.session-card');
const sections = document.querySelectorAll('section');

// Hide all sections except overview initially
sections.forEach(section => {
    if (!section.classList.contains('overview-section')) {
        section.style.display = 'none';
    }
});

// Search Functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    // Add search functionality here
    console.log('Searching for:', searchTerm);
});

// Notifications Click Handler
notifications.addEventListener('click', () => {
    // Add notifications panel functionality here
    console.log('Notifications clicked');
});

// User Profile Click Handler
userProfile.addEventListener('click', () => {
    // Add user profile dropdown functionality here
    console.log('User profile clicked');
});

// Navigation Links Click Handler
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = link.getAttribute('href').substring(1);
        
        // Remove active class from all links
        navLinks.forEach(l => l.parentElement.classList.remove('active'));
        
        // Add active class to clicked link
        link.parentElement.classList.add('active');
        
        // Hide all sections
        sections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Show target section
        const targetElement = document.querySelector(`.${targetSection}-section`);
        if (targetElement) {
            targetElement.style.display = 'block';
            
            // Smooth scroll to section
            targetElement.scrollIntoView({ behavior: 'smooth' });
            
            // Add fade-in animation
            targetElement.style.opacity = '0';
            setTimeout(() => {
                targetElement.style.opacity = '1';
            }, 100);
        }
    });
});

// Logout Handler
logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Add logout functionality here
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = 'design4.html';
    }
});

// Session Join Button Handler
document.querySelectorAll('.session-card .btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
        // Add session join functionality here
        console.log('Join session clicked');
    });
});

// Mentor Action Buttons Handler
document.querySelectorAll('.mentor-actions button').forEach(btn => {
    btn.addEventListener('click', () => {
        const action = btn.textContent.trim();
        // Add mentor action functionality here
        console.log(`${action} clicked`);
    });
});

// Progress Bar Animation
const progressBars = document.querySelectorAll('.progress');
progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
        bar.style.width = width;
    }, 500);
});

// Responsive Sidebar Toggle
const toggleSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    if (window.innerWidth <= 1024) {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');
    }
};

// Window Resize Handler
window.addEventListener('resize', toggleSidebar);

// Add transition styles to sections
sections.forEach(section => {
    section.style.transition = 'opacity 0.3s ease-in-out';
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active section
    const overviewSection = document.querySelector('.overview-section');
    if (overviewSection) {
        overviewSection.style.display = 'block';
        overviewSection.style.opacity = '1';
    }
    
    // Add click handlers for mobile menu
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.top-bar').prepend(mobileMenuBtn);
    
    mobileMenuBtn.addEventListener('click', () => {
        document.querySelector('.sidebar').classList.toggle('show');
    });
    
    console.log('Student Dashboard initialized');
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the message button
    const messageBtn = document.querySelector('.mentor-actions .btn-primary');
    
    // Add click event listener to the message button
    messageBtn.addEventListener('click', function() {
        openMessageBox();
    });
    
    // Function to open the message box
    function openMessageBox() {
        // Create message box container
        const messageBox = document.createElement('div');
        messageBox.className = 'message-box';
        messageBox.id = 'messageBox';
        
        // Create message box content
        messageBox.innerHTML = `
            <div class="message-box-header">
                <h3>Message to Virendra Kumar</h3>
                <button class="close-btn" id="closeMessageBox">&times;</button>
            </div>
            <div class="message-box-body">
                <div class="message-history">
                    <div class="message mentor">
                        <div class="message-content">
                            <p>Hi Atharv! How's your progress with the React project?</p>
                            <span class="message-time">10:30 AM</span>
                        </div>
                    </div>
                    <div class="message student">
                        <div class="message-content">
                            <p>I've completed the basic structure and components. Working on state management now.</p>
                            <span class="message-time">11:15 AM</span>
                        </div>
                    </div>
                    <div class="message mentor">
                        <div class="message-content">
                            <p>Great! Let me know if you need any help with Redux or Context API.</p>
                            <span class="message-time">11:30 AM</span>
                        </div>
                    </div>
                </div>
                <div class="message-input">
                    <textarea placeholder="Type your message..."></textarea>
                    <button class="send-btn"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>
        `;
        
        // Append message box to the body
        document.body.appendChild(messageBox);
        
        // Add event listener to close button
        document.getElementById('closeMessageBox').addEventListener('click', function() {
            closeMessageBox();
        });
        
        // Add event listener to send button
        const sendBtn = messageBox.querySelector('.send-btn');
        const messageInput = messageBox.querySelector('textarea');
        
        sendBtn.addEventListener('click', function() {
            sendMessage(messageInput.value);
        });
        
        // Allow sending message with Enter key
        messageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage(messageInput.value);
            }
        });
        
        // Function to send a message
        function sendMessage(message) {
            if (message.trim() === '') return;
            
            const messageHistory = messageBox.querySelector('.message-history');
            const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            
            // Create new message element
            const newMessage = document.createElement('div');
            newMessage.className = 'message student';
            newMessage.innerHTML = `
                <div class="message-content">
                    <p>${message}</p>
                    <span class="message-time">${currentTime}</span>
                </div>
            `;
            
            // Add new message to history
            messageHistory.appendChild(newMessage);
            
            // Clear input
            messageInput.value = '';
            
            // Scroll to bottom
            messageHistory.scrollTop = messageHistory.scrollHeight;
        }
    }
    
    // Function to close the message box
    function closeMessageBox() {
        const messageBox = document.getElementById('messageBox');
        if (messageBox) {
            messageBox.remove();
        }
    }
}); 