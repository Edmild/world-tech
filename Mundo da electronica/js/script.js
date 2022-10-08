let pesquisa = document.querySelector(".pesquisa")

pesquisa.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        alert(pesquisa.value)
    }
})


