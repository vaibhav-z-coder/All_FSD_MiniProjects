let p=document.querySelector("p")
document.querySelector("#userid").addEventListener('focus', function(e){
p.innerText="Name in Block Letters only"
p.style.color="rgb(147, 147, 37)"
})

document.querySelector("#userid").addEventListener('blur', function(e){
p.innerText="This Fields is manadatory"
p.style.color="rgba(199, 70, 47, 1)"
})

document.querySelector("#userid").addEventListener('keyup', function(e){
let data=this.value
this.value=data.toUpperCase()
})

