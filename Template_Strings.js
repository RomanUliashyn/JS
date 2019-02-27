//Template LIberals 

const product1 = 'Pizza',
      price1 = 30,
      product2 = 'Hamburger'
      price2 = 40;
//Old Method
let html;
html = '<ul>' + 
        '<li>Item:' + product1 + '</li>' +
        '<li>Price:' + price1 + '</li>' +
        '<li>Item:' + product2 + '</li>' +
        '<li>Price:' + price2 + '</li>' +
        '<li>Total:' + (price1 + price2) + '</li>' +
        '</ul>';

//New Method (Template Strings )
html = `
    <ul>
        <li>Item: ${product1}</li>
        <li>Price: ${price1}</li>
        <li>Item: ${product2}</li>
        <li>Price: ${price2}</li>
        <li>Total: ${total(price1,price2)}</li>
    </ul>
`;

function total(price1 , price2){
    return price1 + price2;
}

let app = document.querySelector('#app');
app.innerHTML = html;