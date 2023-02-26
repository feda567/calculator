let n=document.getElementById("screen")
function onclickb(value){
    if(value==='C'){
        n.value=""
    }
    else if(value=="="){
        n.value=eval(n.value)
    }
    else{
        n.value+=value
    }
}