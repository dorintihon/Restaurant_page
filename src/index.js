import './styles.css';
import mainImage from './main_image.jpg';

function renderMainPage() {
    
    const title = document.createElement('h1');
    title.textContent = 'Restaurant';
    document.getElementById('nav_header').appendChild(title);

    loadHomePage();

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
    document.body.style.gridTemplateRows = '100px 1fr auto';


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

    const aboutDiv = document.querySelector('.contact');
    


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

    content.appendChild(itemContainer("Spaghetti", "A classic Italian pasta dish with a rich tomato sauce.", "$12.99"));
    content.appendChild(itemContainer("Burger", "Juicy beef patty with fresh lettuce, tomato, and cheese.", "$10.99"));

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
    document.body.style.backgroundImage = `none`;
    document.body.style.backgroundColor = 'rgb(250, 233, 224)';
    document.body.style.height = '130vh';
    document.body.style.gridTemplateRows = '100px 1fr 1fr';
    document.body.style.height = '100vh';
    const content = document.getElementById('content');
    
    content.style.gridTemplateRows = 'min-content min-content';
    content.style.gridAutoRows = 'min-content';
    content.style.gap = '10px';
    content.style.alignSelf = 'stretch';
    content.style.color = 'black';



    content.innerHTML = `
        <h1>About Us</h1>
        <p>We are a family-owned restaurant dedicated to serving the best food.</p>
        <button id="home-btn">Home</button>
    `;

    const h1 = content.querySelector('h1');
    h1.style.textAlign = 'center';

    

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

    const contactDiv = document.querySelector('.contact');
    const aboutBtn = contactDiv?.querySelector('#about-btn');
    if (aboutBtn) {
        contactDiv.removeChild(aboutBtn);
    }
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

function itemContainer(name, description, price) {
    const container = document.createElement('div');
    container.classList.add('container');

    // container.style.border = '1px solid black';
    container.style.display = 'grid';
    container.style.gridTemplateRows = 'min-content min-content';
    container.style.gridTemplateColumns = 'min-content 1fr min-content';
    container.style.gap = '10px';
    container.style.padding = '20px';

    container.innerHTML = `
        <h1></h1>
        <p></p>
    `;

    const itemName = container.querySelector('h1');
    itemName.textContent = name;

    const itemDescription = container.querySelector('p');
    itemDescription.style.gridRowStart = '2';
    itemDescription.textContent = description;

    const itemPrice = document.createElement('p');
    itemPrice.textContent = price;
    itemPrice.style.fontSize = '1.5rem';
    itemPrice.style.gridColumnStart = '3';
    itemPrice.style.gridRowStart = '1';
    itemPrice.style.gridRowEnd = '3';
    itemPrice.style.alignSelf = 'center';
    itemPrice.style.justifySelf = 'center';

    const itemImage = document.createElement('img');
    itemImage.src = "https://via.placeholder.com/150";
    itemImage.alt = "Item Image";
    itemImage.style.border = '1px solid black';
    itemImage.style.gridColumnStart = '1';
    itemImage.style.gridRowStart = '1';
    itemImage.style.gridRowEnd = '3';
    itemPrice.style.alignSelf = 'center';
    itemPrice.style.justifySelf = 'center';

    
    
    
    container.appendChild(itemImage);
    container.appendChild(itemPrice);
    return container;
}


renderMainPage();
setupNavigation();

