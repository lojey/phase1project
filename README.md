# phase1project

CarryCo Courier Services
CarryCo Courier Services' website. This document provides an overview of the website's structure, features, and functionalities.

Table of Contents
1.Introduction
2.Features
3.Usage
4.Services
5.Profile API Data
6.Scripts and Functions

Introduction
CarryCo Courier Services provides an efficient courier service experience. It offers real-time tracking, instant booking, notification alerts, route optimization, and detailed courier profiles to enhance user experience.

Features
Real-time Tracking
Instant Booking
Notification Alerts
Route Optimization
Courier Profiles
Dark/Light Mode Toggle
Service Management
Usage
The website is designed to be user-friendly, allowing customers to easily navigate through different sections using the navigation menu.

Navigation
Real-time Tracking: Track shipments in real-time.
Instant Booking: Book a courier service instantly.
Notification Alerts: Enable notifications for shipment updates.
Route Optimization: Learn about our efficient route optimization process.
Profiles: View and manage courier profiles.
Services
Real-time Tracking
Allows customers to track their shipments in real-time using a tracking number.

Instant Booking
Enables customers to book courier services by providing pickup and delivery locations.

Notification Alerts
Customers can enable notifications to receive updates about their shipments.

Route Optimization
Detailed information on how we optimize delivery routes for efficiency and timeliness.

Profiles
Manage courier profiles, showcasing the skills and experience of each courier.

Profile API Data
The website fetches and displays profile data from an API. The data includes the couriers' names, ages, ratings, and images.

Scripts and Functions
Event Listeners
javascript

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('toggleMode').addEventListener('click', toggleDarkLightMode);
    document.getElementById('trackButton').addEventListener('click', trackShipment);
    document.getElementById('enableNotifications').addEventListener('click', enableNotifications);

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            showSection(link.getAttribute('href').substring(1));
        });
    });
});


Function Definitions
showServiceDetails(serviceId): Displays details of the selected service.
showAddServiceForm(): Shows the form to add a new service.
addService(event): Adds a new service to the sidebar and displays its details.
showSection(sectionId): Displays the selected section.
hideSections(): Hides all sections.
toggleDarkLightMode(): Toggles between dark and light mode.
trackShipment(): Tracks the shipment using the entered tracking number.
enableNotifications(): Enables notifications for shipment updates.


Fetch API Data
javascript
document.addEventListener('DOMContentLoaded', async function() {
    const apiDataHolder = document.getElementById('apiContent');

    try {
        const response = await axios.get('http://localhost:3000/profiles');
        const posts = response.data;

        console.log(posts);

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post-card');

            postElement.innerHTML = 
                `<img src="${post.image}" alt="profile image"/>
                <h3>NAME: ${post.name}</h3>
                <p>AGE: ${post.age}</p>
                <p>RATINGS: ${post.rating}</p>
            `;
            apiDataHolder.appendChild(postElement);
        });
    } catch (error) {
        apiDataHolder.innerHTML = '<p>FAILED TO FETCH DATA..</p>';
    }
});



To run Json Server use

npx json-server db.json