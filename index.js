const sectionEncriptado = document.getElementById("encriptado")

const elemento = `<div  class="texto-encriptado">
<textarea name="" id="textoEncriptado" cols="30" rows="10" placeholder="Texto encriptado" disabled></textarea>
</div>
<button id="botonCopiar" class="copiar-texto" onclick="copiarTexto()">Copiar</button>`

document.getElementById("botonEncriptar").addEventListener("click", () => {
    let texto = document.getElementById("textoSinEncriptar").value
    if (texto !== "") {
        let textoEncriptado=[]
        letras = texto.split("")
        letras.forEach(element => {
            letraEncriptada= encriptar(element)
            textoEncriptado.push(letraEncriptada)
        });
        textoEncriptado = textoEncriptado.join("")
        let cuadroTextoEncriptado = document.getElementById("textoEncriptado")
        if (!cuadroTextoEncriptado){
            sectionEncriptado.insertAdjacentHTML('beforeend',elemento)
        }
        cuadroTextoEncriptado = document.getElementById("textoEncriptado")
        cuadroTextoEncriptado.value = textoEncriptado
        return false            
    }
    alert("escriba algo pendejo")
})

document.getElementById("botonDesencriptar").addEventListener("click", () => {
    let texto = document.getElementById("textoSinEncriptar").value
    if (texto !== "") {
        let textoEncriptado=[]
        letras = texto.split(" ")
        letras.forEach(element => {
            letraEncriptada= desencriptar(element)
            textoEncriptado.push(letraEncriptada)
        });
        console.log(textoEncriptado)
        textoEncriptado = textoEncriptado.join(" ")
        let cuadroTextoEncriptado = document.getElementById("textoEncriptado")
        if (!cuadroTextoEncriptado){
            sectionEncriptado.insertAdjacentHTML('beforeend',elemento)
        }
        cuadroTextoEncriptado = document.getElementById("textoEncriptado")
        cuadroTextoEncriptado.value = textoEncriptado
        return false     
    }
    alert("escriba algo pendejo")


})

function encriptar (texto) {
    
    textoEncriptado = texto.replace(/e/, 'enter')
                            .replace(/i/, 'imes')
                            .replace(/a/, 'ai')
                            .replace(/o/, 'ober')
                            .replace(/u/, 'ufat')

    return textoEncriptado
}
function desencriptar(texto) {
    textoDescifrado = texto.replace('enter', 'e')
                            .replace('imes', 'i')
                            .replace('ai', 'a')
                            .replace('ober', 'o')
                            .replace('ufat', 'u')

    return textoDescifrado
}

function copiarTexto () {
    const textAreaEncriptado = document.getElementById("textoEncriptado")
    navigator.clipboard.writeText(textAreaEncriptado.value).then(() => {
        console.log("texto copiado")
    })
    
}