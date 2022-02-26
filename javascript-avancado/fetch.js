// fetch - dados dinamicos
let url = "https://api.exchangeratesapi.io/latest?base=USD&simbols=BRL"


    function converter(){
        let input = document.getElementById("valor");
        let valor = input.value;
        
        fetch(url)
            .then((res) => {
                console.log(res);
                return res.json()
            })
            .then((data) => {
                console.log(data.rates.BRL);

                let rate = data.rates.BRL;

                let resultado = `${valor} dolares  = ${rate * valor} em reais`;

                document.getElementById("resultado").innerHTML = resultado;

        })


        
    }