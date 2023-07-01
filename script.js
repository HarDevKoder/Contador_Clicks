    let contador=0
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

