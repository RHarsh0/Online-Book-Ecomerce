let fit = document.getElementById("posters");
const posters = "https://63c66d974ebaa80285458a64.mockapi.io/post?p=1&l=4";
fetch(posters);
let post = []
async function fetchpost(){
    try{
        let req = await fetch(posters);
        let disp = await req.json();
        
        post = disp;
        console.log(post);
        dispost(post)
    }
    catch(error){
        console.log(error);
    }
}
fetchpost();
img = document.createElement("img")
function dispost(post){
    let i=1;
    img.src = post[0].poster
    left.addEventListener("click",function(){
        i--;
        if(i<0){
            i=post.length;
        }
            img.src=post[i].poster;
             
    })
    right.addEventListener("click",function(){
        i++;
        if(i==post.length){
            i=0
        }
        img.src=post[i].poster;
    })
        setInterval(()=>{
img.src = post[i].poster;
            i++;
            
            if(i==post.length){
                i=0
            }
        },3000)
   fit.append(img);

}
let left = document.getElementById("left");
let right = document.getElementById("right");
utilimg =document.createElement("img") 
// let i=0;
// let util = ["https://drive.google.com/file/d/1OJcYyxehvVqJJSVuKrjjS39o-gz9TCE9/view?usp=sharing",
//             "https://drive.google.com/file/d/17rnc3xIUqSMXio5_RUi-tlmG2vzuQemh/view?usp=sharing"]
// slide = document.getElementById("utilslide");
// function utilslide(){
//     let i=0;
//     setInterval(()=>{
//         utilimg.src=util[i];
//         },3000)
//         slide.append(utilimg);
// }
// utilslide();
let show = []
let firstwindow = document.querySelector("#firstshelf div")
const books = "https://63c66f314ebaa8028545abad.mockapi.io/book?p=1&l=8";
fetch(books);
async function fetchbooks(data){
    try{
        let req = await fetch(data);
        let arr = await req.json();
        show = arr;
        console.log(show);
         display(show);
    }
    catch(error){
        console.log(error);
    }
}

fetchbooks(books)
let leftbox = document.querySelector("#firstshelf #bleft");
let rightbox = document.querySelector("#firstshelf #bright");
function display(show){
    let x =0;
    leftbox.addEventListener("click",function(){
        x--;
        
        firstwindow.innerHTML = ""
        print(x)
        
             
    })
    rightbox.addEventListener("click",function(){
        x++;
        
        firstwindow.innerHTML = ""
        print(x)
    })
print(0);
function print(x){

    for(i=0;i<7;i++){
    div = document.createElement("div");
    bokimg = document.createElement("img");
    x++;
    // console.log(x,"*");
    if(x >= 8){
        x=0;
        
    }
    if(x<0){
        x=show.length-1;
    }
    bokimg.src = show[x].avatar;
    div.append(bokimg);
    console.log(x);
      firstwindow.append(bokimg);
}}


}
