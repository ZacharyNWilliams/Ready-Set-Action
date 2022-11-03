function main(){
    let bigClass = document.getElementById("grow-me");
    //1
    bigClass.classList.add("big");
    console.log(bigClass);
    //2
    let shrinkClass = document.getElementById("shrink-me");
    shrinkClass.classList.remove("big");
    //3
    let listThem = document.querySelectorAll("li");
    console.log(listThem);
    //4
    let changeLink = document.querySelector(".link");
    changeLink.setAttribute("href",  "https://www.example.com");
    changeLink.innerText = "somewhere";
    //5
    document.getElementById("hide-me").style.display = "none";
    //6
    document.getElementById("show-me").style.display = "block";

    //7
    // let welcomeMessage = document.getElementById("name").value;
    let mainTitle = document.querySelector("h1");
    mainTitle.innerText = "Welcome "+ document.getElementById("name").value + "!";
    
    
}