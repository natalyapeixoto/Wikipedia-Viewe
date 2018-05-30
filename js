
//função para procurar por algo no wiki

 function wiki() {
	const procura = document.getElementById("input").value;
	if (procura ===""){
	   document.getElementById("displaymsg").innerHTML = "Please enter something or click on the logo below for a random WikiSearch!"
	} else{
  fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${procura}&format=json&origin=*`,  {
    method: 'POST',
    headers: new Headers( {
        'Api-User-Agent': 'Example/1.0'
    } )

} ).then( function ( res ) {
    if ( res.ok ) {
        return res.json();
    }
    throw new Error( 'Network response was not ok: ' + res.statusText );
} ).then( function ( data ) {
	let resultados = `<h3 align="center">Results for "${data[1][0]}"</h3>
                      <ul>
                      <a href="${data[3][1]}"><li><b>${data[1][1]}</b>: ${data[2][1]}</li></a>
                      <a href="${data[3][2]}"><li><b>${data[1][2]}</b>: ${data[2][2]}</li></a>
                      <a href="${data[3][3]}"><li><b>${data[1][3]}</b>: ${data[2][3]}</li></a>
                      <a href="${data[3][4]}"><li><b>${data[1][4]}</b>: ${data[2][4]}</li></a>
                      <a href="${data[3][5]}"><li><b>${data[1][5]}</b>: ${data[2][5]}</li></a>
                      <a href="${data[3][6]}"><li><b>${data[1][6]}</b>: ${data[2][6]}</li></a>
                      <a href="${data[3][7]}"><li><b>${data[1][7]}</b>: ${data[2][7]}</li></a>
                      <a href="${data[3][8]}"><li><b>${data[1][8]}</b>: ${data[2][8]}</li></a>
                      <a href="${data[3][9]}"><li><b>${data[1][9]}</b>: ${data[2][9]}</li></a>
                      </ul>
	`;
     document.getElementById("result").innerHTML = resultados;
});
}
}


