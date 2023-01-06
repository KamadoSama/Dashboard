let balise_i = document.getElementsByTagName('i')[1]
var i = 0
balise_i.addEventListener('click',function(e){
    this.classList.add('fa-spin-pulse')
    i +=1
    if(i%2 ==0){
        this.classList.remove('fa-spin-pulse')
    }
})


let docTitle = document.title

window.addEventListener("blur",()=>{
    document.title = "reviens 😥"
})
window.addEventListener("focus", ()=>{
    document.title = docTitle
})