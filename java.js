let products = [];

function addItem() {
    let product = document.getElementById("input").value;
    products.push(product);
    document.getElementById("input").value = "";
    
    function updateArray() {
        let list = document.getElementById("showArray");
        list.innerHTML = "<h3>Her er dine valgte produkter:</h3>";
        for (let i = 0; i < products.length; i++) {
            list.innerHTML += "<li>" + products[i] + "</li>";
        }
        document.getElementById("showArray").showArray = list;
    }
    updateArray();
}



 document.getElementById("app").innerHTML = `
        
            <div id="title">
                <h1>Array Loop</h1>
            </div>
            
            <input type="text" id="input" placeholder="Hva ønsker du?">
            <button onclick="addItem()" id="button">Add to Cart</button>
            <div id="showArray"></div>
            `