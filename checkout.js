document.addEventListener('DOMContentLoaded', () => {
    const productDetailsContainer = document.getElementById('product-details');

    
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    
    fetch(`http://localhost:3000/products/${productId}`)
        .then(response => response.json())
        .then(product => {
            const productDetails = document.createElement('div');
            productDetails.classList.add("hero")
            productDetails.innerHTML = `
                <div class="card">
                    <img src=${product.image}>
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                    

                    <button onclick="confirmPurchase()">Confirm Purchase</button>
                </div>
            `;

            document.body.appendChild(productDetails)
        })

        

        .catch(error => console.error('Error fetching product details:', error));
});

function confirmPurchase() {
    alert('Purchase confirmed!');
}
