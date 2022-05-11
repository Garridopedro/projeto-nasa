$("#btn").click(function (e) {
    e.preventDefault();
    $('#date,#text,#media,#title').remove()
    const data = $('#data').val()
    const key = 'ucMpgE5ATHTiYTHPirNTM8v5C1WtiEiTcpDxa5Kl'
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${data}`,
        success: function (resposta) {
            mostra(resposta)
        },
        error: function (erro) {
            console.log(erro);
        },
    });
    $(`<div id='text'></div> <div id='date'></div> <div id='title'></div> <div id='media'></div>`).appendTo("#resultado")
});

function mostra(resposta) {
    $('#date').prepend(`<h2>${resposta.date}</h2>`)
    $('#text').prepend(`<p>${resposta.explanation}</p>`)
    $('#title').prepend(`<h3>${resposta.title}</h3>`)
    if (resposta.media_type == "video") {
        $('#media').prepend(`<iframe id='borda' src='${resposta.url}'></iframe><p> Link do video: <a href="${resposta.url}" target="_Blank">Here<a>`)
    } else if (resposta.media_type == 'image') {
        $('#media').prepend(`<a href="${resposta.url}" target="_Blank"><img id='borda'src='${resposta.url}'/></a><p> Link da foto: <a href="${resposta.url}" target="_Blank">Here<a></p>`)
    }
}