const sectionEncriptado = document.getElementById("encriptado")

const hola = document.getElementById("hola")

const elemento = `<div class="texto-encriptado">
<textarea name="" id="textoEncriptado" cols="30" rows="10" placeholder="Texto encriptado" disabled></textarea>
</div>
<button id="botonCopiar" class="copiar-texto" onclick="copiarTexto()">Copiar</button>`

document.getElementById("botonEncriptar").addEventListener("click", () => {
    let texto = document.getElementById("textoSinEncriptar").value
    console.log(texto)
    if (texto !== "") {
        let textoEncriptado=[]
        letras = texto.split("")
        console.log(letras)
        letras.forEach(element => {
            letraEncriptada= encriptar(element)
            textoEncriptado.push(letraEncriptada)
        });
        textoEncriptado = textoEncriptado.join("")
        sectionEncriptado.insertAdjacentHTML('beforeend',elemento)
        console.log(textoEncriptado)
        const textAreaEncriptado = document.getElementById("textoEncriptado")
        textAreaEncriptado.value = textoEncriptado
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

    console.log(textoEncriptado)
    return textoEncriptado
}

function copiarTexto () {
    navigator.clipboard.writeText(textAreaEncriptado.value).then(() => {
        console.log("texto copiado")
    })
    
}