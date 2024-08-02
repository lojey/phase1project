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

function showServiceDetails(serviceId) {
    const services = {
        SameDay: 'Our same-day delivery service ensures your packages are delivered within the same day,with zerro delays ',
        NextDay: 'With our next-day delivery service, your packages will arrive the following day.',
        International: 'With our fast,affordable and secure courrier services we do provide shipping to various countries around the world',
        Bulk: 'Our bulk shipment service handles large volumes of goods efficiently, securely and with zero damages whatsoever.'
    };

    const serviceDetailSection = document.getElementById('serviceDetails');
    serviceDetailSection.innerHTML = `
        <h2>${serviceId.split(/(?=[A-Z])/).join(' ')}</h2>
        <p>${services[serviceId]}</p>
    `;
    hideSections();
    serviceDetailSection.classList.remove('hidden');
}

function showAddServiceForm() {
    hideSections();
    document.getElementById('addServiceForm').classList.remove('hidden');
}

function addService(event) {
    event.preventDefault();
    const serviceName = document.getElementById('serviceName').value;
    const serviceDescription = document.getElementById('serviceDescription').value;

    const newServiceListItem = document.createElement('li');
    newServiceListItem.textContent = serviceName;
    newServiceListItem.addEventListener('click', () => showServiceDetails(serviceName));

    document.querySelector('.sidebar ul').appendChild(newServiceListItem);

    document.getElementById('serviceDetails').innerHTML = `
        <h2>${serviceName}</h2>
        <p>${serviceDescription}</p>
    `;

    hideSections();
    document.getElementById('serviceDetails').classList.remove('hidden');
}

function showSection(sectionId) {
    hideSections();
    document.getElementById(sectionId).classList.remove('hidden');
}

function hideSections() {
    document.querySelectorAll('.content section').forEach(section => section.classList.add('hidden'));
}

function toggleDarkLightMode() {
    document.body.classList.toggle('dark-mode');
}

function trackShipment() {
    const trackingNumber = document.getElementById('trackingNumber').value;
    const trackingResult = document.getElementById('trackingResult');
    trackingResult.innerHTML = `<p>Tracking information for ${trackingNumber}...</p>`;
}

function enableNotifications() {
    alert('Notifications enabled!');
}

