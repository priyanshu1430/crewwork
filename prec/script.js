function add(){
    a = parseInt(document.querySelector("#a").value)
    b = parseInt(document.querySelector("#b").value)
    let c = a+b;
    div = document.querySelector("#sum")
    div.innerText = c;

}
function tripcomp(){

    div = document.querySelector("comp")
    i = parseInt(document.querySelector("#i").value)
    j = parseInt(document.querySelector("#j").value)
    k = parseInt(document.querySelector("#k").value)
    let ar= [i,j,k]
    d = parseInt(document.querySelector("#d").value)
    e = parseInt(document.querySelector("#e").value)
    f = parseInt(document.querySelector("#f").value)
    let f1=0,f2=0;
    let arr= [d,e,f]
    for(i=0;i<3;i++)
    { 
        if(ar[i]>arr[i])
        {
            f1++;
        }
        else if(ar[i]>arr[j])
        {
            f2++;
        }

    }
    if(f1>f2)
    {
     div.innerText="1st is the winner";
     return
    }
    else
    {
        div.innerText="2nd st is the winner";
        return
    }
    

}


