function emailcheck()
{
    const em = document.querySelector('.email').value
    console.log(em)
    const res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(em.match(res))
    {
    return true
    }
    else{
        alert("Enter a valid email")
    }
}
function passwordcheck()
{
    const ps = document.querySelector('.pwd').value
    const pw=  /^[A-Za-z]\w{7,14}$/;
    if (ps.match(pw))
    {
        return true
    }
    else {
        alert("enter a valid password")
    }
}
