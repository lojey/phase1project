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

TECHNOLOGIES USED 
    -HTML
    -CSS
    -JavaScript 

PROJECT SETUP
    -Create a new project folder
    -Clone the repository
    -Navigate to the projects directory.
    -Code . to be directed to VS code 


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
To run Json Server use

npx json-server db.json

Commit to the repository by 
 1. git add 
 2. git commit -m" add message"
 3.git push
 