let btn;
let date; 
let img;

console.log(document.getElementById("IDdata").value);

function ChamadaAPI(){
    clique();
}

// função que vai consumir a API quando for chamada no clique do botão
function clique(){    
    const pedirAPI = (url) => {// recebe a url que será passada mais a frente
        const pedindo = (resolve, reject) => {
            // função responsável por solicitar API, recebendo caminho pela url
            fetch(url)
            .then(( resp ) => {
                // verifica qual erro aconteceu e o status da solicitação
                if(!resp.ok) throw Error('erro ao executar' + resp.status);
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

$(document).on('click', '#IDEnviar', function () {    
    btn = document.getElementById("IDEnviar");
    data = document.getElementById("IDdata");
    img = document.getElementById("IDimg");   
    text = document.getElementById("IDtxt");
    
    ChamadaAPI();
});

function ProcHTML(response){ 
    console.table(response);    
    
    var image = new Image();
    image.src = response.url;
    img.append(image);

    text.append(response.explanation )
}