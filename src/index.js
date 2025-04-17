import './styles.css';
import mainImage from './main_image.jpg';

function renderMainPage() {
    document.body.style.backgroundImage = `url(${mainImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center top';

    const title = document.createElement('h1');
    title.textContent = 'Restaurant';
    document.getElementById('nav_header').appendChild(title);

    const content = document.getElementById('content');
    
    content.innerHTML = `
        <h1>Delicious Food</h1>
        <p>Welcome to our restaurant! We serve the best food in town.</p>
        <button id="menu-button">Menu</button>
    `;

    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.innerHTML = `
        <button id="contact-button">About</button>
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out!</p>
    `;
    document.body.appendChild(contact);
}


renderMainPage();
