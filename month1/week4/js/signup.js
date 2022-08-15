const div = document.querySelector(".eerror")
const div1 = document.querySelector(".perror")
function emailcheck()
{
    const email = document.querySelector('.email')
    const em = email.value
    console.log(em)
    const res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(em.match(res))
    {
    return true
    }
    else{
        div.innerHTML = "<strong>Invalid email</strong>";
        div.style.color = "red"
        email.style.borderColor = "red"
    }
}
function passwordcheck()
{
    const pwd = document.querySelector('.pwd')
    const ps = pwd.value
    const pw=  /^[A-Za-z]\w{7,14}$/;
    if (ps.match(pw))
    {
        return true
    }
    else {
        div1.innerHTML = "<strong>Invalid password</strong>";
        div1.style.color = "red"
        pwd.style.borderColor = "red"
    }
}
