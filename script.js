document.getElementById('criptografar').addEventListener('click', ()=>{
    let text = document.getElementById('texto');
    let plaintext = text.value;

    let fatorCriptografia = 5;
    let criptotext = "";
    // Para cada letra da string
    for(let i = 0; i < plaintext.length; i++){
        // pegar o codigo ascii
        let code = plaintext[i].charCodeAt();

        if(code == 32){
            criptotext += plaintext[i];
            continue
        }
        // Aplicar o fator de criptografia
        criptotext += String.fromCharCode(code+fatorCriptografia);
    }
    text.value = criptotext;
    
});

document.getElementById('descriptografar').addEventListener('click', ()=>{
    let text = document.getElementById('texto');
    let plaintext = text.value;

    let fatorCriptografia = 5;
    let criptotext = "";
    for(let i = 0; i < plaintext.length; i++){
        // pegar o codigo ascii
        let code = plaintext[i].charCodeAt();
        if(code == 32){
            criptotext += plaintext[i];
            continue;
        }
        criptotext += String.fromCharCode(code-fatorCriptografia);
    }
    text.value = criptotext;
    
});