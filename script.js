function calculateCost(){
    const packageWeight = parseFloat(document.getElementById("weight").value);
    const destinationZone = document.getElementById("destination").value;
    const isExpressDelivery = document.getElementById("weight").checked;



    let baseCost = 2000
    const OVERWEIGHT_LIMIT = 5; //5KG
    const OVERWEIGHT_FEE = 1500; //N1500

    let totalCost = baseCost

    if( destinationZone === "ibadan"){
        totalCost + 1000;  // add N5000 for ibadan
    }
    if(destinationZone === "lagos"){
        totalCost + 1000;  // add N5000 for lagos
    }
    
    if(packageWeight > OVERWEIGHT_LIMIT) {
        //totalCost = totalCost + overWeight fee
        totalCost + OVERWEIGHT_FEE;
    }

    if(isExpressDelivery){
        //expressExtraCost = totalCost * (50/100)
        const expressExtraCost = totalCost * 0.5;
        totalCost = totalCost + expressExtraCost;
        //totalCost = totalCost * 1.5
    }

    const resultElement = document.getElementById("results");
    const message = `The total const for your ${packageWeight}kg package to ${destinationZone} is ${totalCost}`;
    resultElement.innerHTML = message;


    
}