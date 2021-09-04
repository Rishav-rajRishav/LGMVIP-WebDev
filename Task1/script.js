let tabPanes = document.getElementsByClassName("header")[0].getElementsByTagName("div");
 
for(let i=0;i<tabPanes.length;i++){
    tabPanes[i].addEventListener("click",function(){
    document.getElementsByClassName("header")[0].getElementsByClassName("active")[0].classList.remove("active");
    tabPanes[i].classList.add("active");
    
    document.getElementsByClassName("content")[0].getElementsByClassName("active")[0].classList.remove("active");
    document.getElementsByClassName("content")[0].getElementsByClassName("form_body")[i].classList.add("active");
  });
}