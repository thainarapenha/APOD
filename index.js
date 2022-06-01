let btn;
let date; 
let img;
let txt;

console.log(document.getElementById("IDdata").value);

// função que vai consumir a API quando for chamada no clique do botão
function clique(){    
    const pedirAPI = (url) => {// recebe a url que será passada mais a frente
        const pedindo = (resolve, reject) => {
            // função responsável por solicitar API, recebendo caminho pela url
            fetch(url)
            .then(( resp ) => {
                // verifica qual erro aconteceu e o status da solicitação
                if(!resp.ok)throw Error('erro ao executar' + resp.status);
                return resp.json();
            })
            // se tiver tudo certo, exibe o que foi encontrado
            .then(function (resolve){
                ProcHTML(resolve)
            })
            .catch (reject)
        }
        return new Promise(pedindo);
    }
    // passa o caminho da url + data para consumir a API
    pedirAPI('https://api.nasa.gov/planetary/apod?api_key=ZxgxSULl0vkWFRQ6MyHrY3tSKB449bO3kO0wQkN5&date=' + IDdata.value ).then(console.log).catch(console.error);
}

// quando é solicitado dados da API,
// as variáveis recebem seus respectivos valores/informações
$(document).on('click', '#IDEnviar', function () {    
    btn = document.getElementById("IDEnviar");
    data = document.getElementById("IDdata");
    img = document.getElementById("IDimg");   
    text = document.getElementById("IDtxt");

    clique();
});

// area resposável por exibir os dados consumidos da API
function ProcHTML(response){
    //apenas exibe o que está sendo consumido no console 
    console.table(response);

    //recebem os dados obtidos com a API
    const image = response.url;
    const textoParagrafo = response.explanation;

    //apenas exibe o que está sendo consumido no console
    console.log({image});
    console.log({textoParagrafo});

    //adiciona a imagem capturada da solicitação a API
    img.setAttribute("src", image)

    //limpa a area resposável pelo txt para o novo ser adicionado
    $("div").click(function(){
        $("#IDtxt").empty();
    });
    //adiciona o texto capturado da solicitação a API
    text.append(textoParagrafo);
}