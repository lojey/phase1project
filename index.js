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
        SameDay: 'At Carryco  we understand the importance of speed and reliability when it comes to delivering your packages. That is why we offer a premium same-day delivery service designed to meet your urgent delivery needs.Our same-day delivery service ensures your packages are delivered within the same day,with zerro delays.',
        NextDay: 'Our next-day delivery service is designed to provide you with fast, reliable, and efficient delivery solutions. Whether you need to send important documents, parcels, or packages, you can trust us to get them to their destination by the next day.',
        International: ' our global network ensures that your items reach their destination safely and on time. We offer a range of shipping options to suit your needs, from express delivery for urgent shipments to economy options for cost-effective solutions.',
        Bulk: 'At Caaryco Courier Company, we understand the complexities and demands of bulk shipping. Our dedicated bulk shipping service is designed to cater to businesses and individuals who need to move large volumes of goods efficiently and cost-effectively.'
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