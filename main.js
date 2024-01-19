document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    async function getData() {
        try {
            const response = await fetch('http://localhost:3000/products');
            const respData = await response.json();
            
            respData.forEach(data => {
                addContent(data);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function addContent(contentData) {
        const hero = document.createElement("div");
        hero.classList.add("hero");

        hero.innerHTML = `
        
        <div class="card">
            <img src="${contentData.image}" alt="${contentData.name}">
            <p>${contentData.description} <span>${contentData.price}</span></p>
            <button class="buy-now" data-product-id="${contentData.id}">buy now</button>
        </div>


        `;
        
        document.body.appendChild(hero);

        const buyNowButtons = document.querySelectorAll('.buy-now');
        buyNowButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product-id');
            window.location.href = `checkout.html?id=${productId}`;
        });
    });
}

    getData();

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});
