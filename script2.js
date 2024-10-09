 const apiKey = '490fafffa6aed2045e186539';
// const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;


                    // Flag Updates && All Options


const dropdowns = document.querySelectorAll('.first select');

for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode ;
        newOption.value = currCode ;
        if(select.name === 'from-currency' && currCode === 'USD'){
            newOption.selected = "select" ;
        }
        else if(select.name === 'to-currency' && currCode === 'INR'){
            newOption.selected = "select" ;
        }
        select.append(newOption);
    }
    select.addEventListener('change',(evt)=>{
        updateFlag(evt.target);
    });

    const updateFlag = (element)=>{
        let currVal = element.value;
        let countryVal = countryList[currVal];
        let source = `https://flagsapi.com/${countryVal}/flat/64.png`
        let img = element.parentElement.querySelector("img");
        img.src = source ;
    }
}

                    //COnversion of currencies and returning amount 
const btn = document.querySelector('#hghg');

    btn.addEventListener('click',async(evt)=>{
        evt.preventDefault();
        let amount = document.getElementById('amount').value;
        let fromval = document.getElementById('from-currency').value;
        let tocode = document.getElementById('to-currency').value;
        try {
            let newsource = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromval}`;
            const response = await fetch(newsource);
            if (!response.ok) {
                throw new Error('Server Down');
            }
            const data = await response.json();
    
            let rate = data.conversion_rates[tocode] ;
    
            let answer = (rate * parseFloat(amount)).toFixed(2);
    
            document.getElementById('result').textContent = answer ; 
        } catch (error) {
            console.error("Error fetching exchange rate data:", error);
            document.getElementById('result').textContent = 'Error fetching data';
        }
    })
