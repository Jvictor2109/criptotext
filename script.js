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

document.getElementById('msg').addEventListener('click', ()=>{
    let text = document.getElementById('texto');
    text.value = "Rjz frtw1 Jxytz jxhwj{jsit jxxf ujvzjsf hfwyf xtrjsyj ufwf yj injw t vzfsyt jz yj frt1 j jxytz kjqn ij jxyfwrtx htruqjyfsit 9 rjxjx ozsytx&[h wjfqrjsyj rzitz f rnsmf {nif1 rj rtxywtz vzj {n{jw î rznyt rjqmtw f 8 -Jz1 {h j Ojxzx.& Rznyt tgwnlfit utw xjw f rzqmjw nshwò{jq vzj {thï î1 j utw rj kfjw t sfrtwfit rfnx kjqn it rzsit ytitx tx infx&Jz twt ytitx tx infx flwfijhjsit ujqf xzf {nif1 j ujinsit vzj jqj stx lznj j stx fozij f xjwrtx rjqmtwjx ozsytx j nsin{nizfqrjsyj1 inf fuøx inf3Jz frt yzit jr {thï1 ijxij xzf fufwïshnf fyî f xzf qnsiòxxnrf fqrf&Jxytz kjqn jr xfgjw vzj xèt fujsfx 9 rjxjx ij rznyfx iîhfifx ft qfit if rzqmjw if rnsmf {nif&Jz yj frt rznyèt fsyf1 {thï  î t rjqmtw uwjxjsyj ij Ijzx uwf rnsmf {nif3"
});