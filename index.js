let btn = document.getElementById("#btnEnviar");
// let data = document.getElementById("#IDdata");
let img = document.getElementById("#areaIMG");

function chamando(){
    let data = document.getElementById("#IDdata").val()  
    clique(data)
}

// função que vai consumir a API quando for chamada no clique do botão
function clique(){
    const pedirAPI = (url) => {// recebe a url que será passada mais a frente
        const pedindo = (resolve, reject) => {
            // função responsável por solicitar API, recebendo caminho pela url
            fetch(url)
            .then(( response ) => {
                // verifica qual erro aconteceu e o status da solicitação
                if(!response.ok) throw Error('erro ao executar' + response.status);
                return response.json();
            })
            .then(resolve)
            .catch (reject)
        }
        return new Promise(pedindo);
    }
    // passa o caminho da url para consumir a API
    pedirAPI('https://api.nasa.gov/planetary/apod?api_key=ZxgxSULl0vkWFRQ6MyHrY3tSKB449bO3kO0wQkN5').then(console.log).catch(console.error);
}

// $(document).on('click', '#btnEnviar', function () {
//     let data = $("#data").val();    
//     ChamadaAPI(data);
// });

function ProcHTML(response){
    let img = document.querySelector("areaIMG")
    let txt = document.querySelector("areaTXT")
    img.innerHTML = `
    <img src=" + response.url + ">`
    txt.innerHTML = `
    <p> + response.explanation + </p>');`
}