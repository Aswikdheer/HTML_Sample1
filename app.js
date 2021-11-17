let changebg=()=>
{
    let divElement=document.getElementsByClassName("main")[0];
    divElement.innerHTML="<h1>Hello World</h1>";
    let bodyEl=document.getElementsByTagName("body")[0];
    bodyEl.style.backgroundColor="aqua";
}