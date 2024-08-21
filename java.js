let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
 }

function pushArray(){
    document.getElementById("showArray").innerHTML = numbers;
}


document.getElementById("app").innerHTML = `
        
            <div id="title">
                <h1>Array Loop</h1>
            </div>
            
            <button onclick="pushArray()" id="showArray">Vis arrayen</button>
            
        
        
`