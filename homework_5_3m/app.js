const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const eur = document.querySelector("#eur")





const convert = (elem, elem2, elem3) => { 
    
    
    elem.addEventListener("input", () => {
      const request = new XMLHttpRequest()
      request.open("GET", "data.json")
      request.setRequestHeader("Content-type", "application/json")
      request.send()
      request.addEventListener("load",()=>{
        const resp = JSON.parse(request.response)
        // if(elem === som){
        //     elem2.value = (elem.value/resp.usd).toFixed(2)
        //     elem3.value = (elem.value/resp.eur).toFixed(2)
        // }else if (elem === usd){
        //     elem2.value = (elem.value*resp.usd).toFixed(2)
        //     elem3.value = ((elem.value*resp.usd)/resp.eur).toFixed(2)
        // }else if (elem === eur){
        //     elem2.value = (elem.value*resp.eur).toFixed(2)
        //     elem3.value = ((elem.value * resp.eur)/resp.usd).toFixed(2)
        // }
        // if(elem.value ===""){
        //     elem2.value = ""
        //     elem3.value = ""
        // }
        switch (elem){
            case som:
                elem2.value = (elem.value/resp.usd).toFixed(2)
                elem3.value = (elem.value/resp.eur).toFixed(2)
                break;
            case usd:
                elem2.value = (elem.value*resp.usd).toFixed(2)
                elem3.value = ((elem.value*resp.usd)/resp.eur).toFixed(2)
                break;
            case eur:
                elem2.value = (elem.value*resp.eur).toFixed(2)
                elem3.value = ((elem.value * resp.eur)/resp.usd).toFixed(2)
                break;
            }
            if(elem.value ===""){
                elem2.value = ""
                elem3.value = ""
            }

        
      })
})
}

convert(som,usd,eur)
convert(usd,som,eur)
convert(eur,som,usd)
