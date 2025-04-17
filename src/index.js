import './styles.css';
import mainImage from './main_image.jpg';

function renderMainPage() {
    const title = document.createElement('h1');
    title.textContent = 'Restaurant';
    document.getElementById('nav_header').appendChild(title);

    loadHomePage();

    loadMenuPage(); //TEMP
    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.innerHTML = `
        <button id="about-btn">About</button>
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out!</p>
    `;
    document.body.appendChild(contact);
}

function loadHomePage() {
    document.body.style.backgroundImage = `url(${mainImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center top';
    document.body.style.height = '116vh';

    const content = document.getElementById('content');

    content.style.display = 'grid';
    content.style.alignSelf = 'end';
    content.style.justifySelf = 'center';
    content.style.color = 'rgb(250, 233, 224)';
    
    content.innerHTML = `
        <h1>Delicious Food</h1>
        <p>Welcome to our restaurant! We serve the best food in town.</p>
        <button id="menu-btn">Menu</button>
    `;


    const h1 = content.querySelector('h1');

    h1.style.margin = '0';
    h1.style.padding = '20px';
    h1.style.fontSize = '4rem';
    h1.style.textAlign = 'center';

    const p = content.querySelector('p');

    p.style.margin = '0';
    p.style.padding = '20px';
    p.style.fontSize = '2rem';
    p.style.textAlign = 'center';

    const buttons = content.querySelectorAll('button');
    buttons.forEach((btn) => {
        btn.style.backgroundColor = 'rgb(104, 55, 39)';
        btn.style.borderRadius = '22px';
        btn.style.color = 'white';
        btn.style.border = 'none';
        btn.style.fontSize = '2rem';
        btn.style.padding = '15px 30px';
        btn.style.margin = '20px';
        btn.style.cursor = 'pointer';
        btn.style.justifySelf = 'center';
        btn.style.alignSelf = 'center';
    });


}

function loadMenuPage() {
    document.body.style.backgroundImage = `none`;
    document.body.style.backgroundColor = 'rgb(250, 233, 224)';
    document.body.style.height = '130vh';

    const content = document.getElementById('content');

    content.style.gridTemplateRows = 'min-content min-content';
    content.style.gridAutoRows = 'min-content';
    content.style.gap = '10px';
    content.style.alignSelf = 'stretch';
    content.style.color = 'black';

    content.innerHTML = `
        <h1>Menu</h1>
        <p>Check out our delicious offerings!</p>
    `;

    content.appendChild(itemContainer());
    content.appendChild(itemContainer());

    const h1 = content.querySelector('h1');

    h1.style.margin = '0';
    h1.style.padding = '20px';
    h1.style.paddingBottom = '0px';
    h1.style.fontSize = '4rem';
    h1.style.textAlign = 'center';

    const p = content.querySelector('p');
    p.style.margin = '0';
    p.style.paddingBottom = '20px';
    p.style.fontSize = '2rem';
    p.style.textAlign = 'center';
}

function loadAboutPage() {
    const content = document.getElementById('content');
    
    content.innerHTML = `
        <h1>About Us</h1>
        <p>We are a family-owned restaurant dedicated to serving the best food.</p>
        <button id="home-btn">Home</button>
    `;
}

function setupNavigation() {
    document.body.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'menu-btn') {
            loadMenuPage();
        }
        if (e.target && e.target.id === 'home-btn') {
            loadHomePage();
        }
        if (e.target && e.target.id === 'about-btn') {
            loadAboutPage();
        }
    });
}

function itemContainer() {
    const container = document.createElement('div');
    container.classList.add('container');

    container.style.border = '1px solid black';
    container.style.display = 'grid';
    container.style.gridTemplateRows = 'min-content min-content';
    container.style.gridTemplateColumns = '1fr min-content';

    container.innerHTML = `
        <h1>Item</h1>
        <p>This is a description of the item.</p>
    `;
    const description = container.querySelector('p');
    description.style.gridRowStart = '2';

    const price = document.createElement('p');
    price.textContent = '$10';
    price.style.fontSize = '1.5rem';
    price.style.gridColumnStart = '2';
    
    
    
    container.appendChild(price);
    return container;
}


renderMainPage();
setupNavigation();

