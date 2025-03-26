const container = document.querySelector(".container");
const avgPrice = document.querySelector(".price")

const freelancers = [
    {name: "Alice", occupation: "writer", price: 30},
    {name: "Carol", occupation: "programmer", price: 70},
    {name: "Bob", occupation: "teacher", price: 50},
    {name: "Ashley", occupation: "writer", price: 81},
    {name: "Malcolm", occupation: "programmer", price: 45},
    {name: "David", occupation: "teacher", price: 76},
    {name: "Megan", occupation: "writer", price: 47},
    {name: "Jessica", occupation: "programmer", price: 72},
]

function randomFl() {
    const nameIdx = Math.floor(Math.random() * freelancers.length);
    const occupationIdx = Math.floor(Math.random() * freelancers.length);
    const priceIdx = Math.floor(Math.random() * freelancers.length);
    const newPerson = {
        name: freelancers[nameIdx].name,
        occupation: freelancers[occupationIdx].occupation,
        price: freelancers[priceIdx].price
    }
    return newPerson;
}


const people = [
    randomFl(),
    randomFl(),
    randomFl(),
   
]

function render() {
    const html = people.map(newPerson => {
        return `<tr>
                    <td>${newPerson.name}</td>
                    <td>${newPerson.occupation}</td>
                    <td>$${newPerson.price}</td>
                </tr>`;
    })
    container.innerHTML = html.join("");
}
function averagePrice() {
    if (people.length === 0) return 0;
    const total = people.reduce((acc, people) => {
        return acc + people.price;
    }, 0);
    return (total / people.length).toFixed(2);
}

function updateAveragePrice() {
    avgPrice.textContent = `The Average Price is: $${averagePrice()}`;
}

render();
updateAveragePrice();


const interval = setInterval(() => {
    people.push(randomFl());
    render();
    updateAveragePrice(); 
    if (people.length === 8) {
        clearInterval(interval);
    }
}, 3000);
setInterval(updateAveragePrice, 2000);


