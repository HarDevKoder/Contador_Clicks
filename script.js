
function downloadJSAtOnload() {
    // Escribir aquí el codigo JS de la APP
    var contador=0
    document.getElementById('disminuir').addEventListener('click',()=>{
        --contador;
        document.getElementById('cuenta').textContent=contador;
    })

    document.getElementById('aumentar').addEventListener('click',()=>{
       ++contador;
       document.getElementById('cuenta').textContent=contador;
    })
    document.getElementById('reiniciar').addEventListener('click',()=>{
        contador = 0;
        document.getElementById('cuenta').textContent=contador;
    })
}

if (window.addEventListener)
    window.addEventListener("load", downloadJSAtOnload, false);
else if (window.attachEvent)
    window.attachEvent("onload", downloadJSAtOnload);
else window.onload = downloadJSAtOnload;
