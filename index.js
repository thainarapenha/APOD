
// função do botão enviar
$("#btnEnviar").click(function(){
    verAPI();
});
// a ação do botão retorna a chamada de outra função
function chamarAPI(){
    const data = $("#data").val();
    return pedidoAPI(data)
}

function pedidoAPI(procurar){
    let url = "https://api.nasa.gov/planetary/apod?api_key=ZxgxSULl0vkWFRQ6MyHrY3tSKB449bO3kO0wQkN5"

    fetch(`${url}&date=${procurar}`)
}
