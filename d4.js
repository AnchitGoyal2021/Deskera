window.onload = () =>{
const add=document.getElementById("add")
add.addEventListener("click",todu_list)
}

function todu_list()
{
    const value=document.getElementById('v')
    var text=document.getElementById('ul');
    var text1=document.createTextNode(value.value)
    let to=document.createElement('ul');    
     document.body.appendChild(to);       
     to.appendChild(text1);
     text.appendChild(to);
     }
