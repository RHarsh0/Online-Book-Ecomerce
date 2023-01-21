// header-----------------------------------------------------------------
let cartstore = JSON.parse(localStorage.getItem("cartel"));
if(cartstore==null){
    cartstore = [];
}
let arr=["BUY ONE GET ONE","$20 OF NOOK GLOWLIGHT","FREE SHIPING ON ORDER OF $40 OR MORE","SPEND $50 GET $50 EGIFT CARD"]
let fill = document.getElementById("text");
let i=0;
setInterval(()=>{
    if(i>=arr.length){
        i=0;
    }
    fill.innerText = arr[i];
    
    i++;
},2000)
let subtotal = document.getElementById("val");
let circle = document.getElementById("circle");
// circle.style.border = "1px solid"
let cartcount = document.createElement("div");

cartcount.innerText = cartstore.length;
circle.append(cartcount)
let bookdisplay = document.getElementById("book-display")
let truevalue = 0;
function dispcart(){
    cartstore.forEach(element => {
        let count = 0;
        let booknum = document.createElement("div")
        let bokimage = document.createElement("div")
        let details = document.createElement("div")
        let cbookimg = document.createElement("img");
        cbookimg.src = element.avatar;
        let name = document.createElement("h3");
        name.innerText = element.bookname;
        let price = document.createElement("h2");
        price.innerText = `$ ${element.price}`
        let nums = document.createElement("div")
        let add = document.createElement("button");
        add.addEventListener("click",function(){
          count++;
          val.innerText = count;
          truevalue += Number(element.price);
        })
        let sub = document.createElement("button");
        sub.addEventListener("click",function(){
            count--;
            val.innerText = count;
            truevalue -= Number(element.price);
        })
        let del = document.createElement("button");
        del.innerText = "Remove"
        del.addEventListener("click",function(){
            cartstore = cartstore.filter((el,ind)=>{
                if(el==element){
                    truevalue -= element.price;
                    return false;
                }
                else{
                    return true;
                }
            })
            localStorage.setItem("cartel",JSON.stringify(cartstore));
            bookdisplay.innerHTML = "";
            
            subtotal.innerText = truevalue
            dispcart();
        })

        add.innerText = "+";
        sub.innerText = "-";
        let val = document.createElement("h2");
        val.innerText = count;
        nums.append(add,val,sub);
        details.append(name,price,nums,del);
        bokimage.append(cbookimg)
        booknum.append(bokimage,details);
        bookdisplay.append(booknum);
        truevalue += element.price
        subtotal.innerText = truevalue;
    });
}
dispcart();
// console.log(cartstore[0].price);
//header ends-------------------------------------------------------------------
let fit = document.getElementById("posters");
const posters = "https://63c66d974ebaa80285458a64.mockapi.io/post?p=1&l=4";
fetch(posters);
let post = []
async function fetchpost(){
    try{
        let req = await fetch(posters);
        let disp = await req.json();
        
        post = disp;
        // console.log(post);
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
    let cart = document.createElement("button");
    cart.innerText = "Qick Add";
    cart.addEventListener("click",function(){
         cartstore.push(show[i]);
        console.log(show[i].bookname);
        localStorage.setItem("cartel",JSON.stringify(cartstore));
        cartcount.innerText = cartstore.length;
circle.append(cartcount)
     })
    
    bokimg.src = show[x].avatar;
    div.append(bokimg,cart);
    // console.log(x);
      firstwindow.append(div);
}}



}
let cartshow = document.getElementById("cart");
let cartgot = document.getElementById("cart-got");
closeshow = document.querySelector("#cart-got div:first-child")
let close = document.createElement("button");
close.innerText = "X";
closeshow.append(close);
cartshow.addEventListener("click",function(){
    cartgot.style.display = "block";
close.addEventListener("click",function(){
    cartgot.style.display = "none";
})
})

// secondwindow---------------------------------------------------------------
let secwindow = document.querySelector("#secshelf div")
const comics = "https://63c66f314ebaa8028545abad.mockapi.io/comic?p=1&l=10";
fetch(comics);
let slip = []
async function fetchcomics(data){
    try{
        let req = await fetch(data);
        let arr = await req.json();
        slip = arr;
        console.log(slip);
         displaycomics(slip);
    }
    catch(error){
        console.log(error);
    }
}

fetchcomics(comics)
let secleft = document.querySelector("#secshelf #secleft");
let secright= document.querySelector("#secshelf #secright");
function displaycomics(slip){
    let x =0;
    secleft.addEventListener("click",function(){
        x--;
        
        secwindow.innerHTML = ""
        print(x)
        
             
    })
    secright.addEventListener("click",function(){
        x++;
        
        secwindow.innerHTML = ""
        print(x)
    })
print(0);


function print(x){

    for(i=0;i<7;i++){
    secdiv = document.createElement("div");
    secimg = document.createElement("img");
    x++;
    // console.log(x,"*");
    if(x >= 8){
        x=0;
        
    }
    if(x<0){
        x=slip.length-1;
    }
    let cart = document.createElement("button");
    cart.innerText = "Qick Add";
    cart.addEventListener("click",function(){
         cartstore.push(slip[i]);
        console.log(slip[i].comicname);
        localStorage.setItem("cartel",JSON.stringify(cartstore));
        cartcount.innerText = cartstore.length;
circle.append(cartcount)
     })
    
    secimg.src = slip[x].img;
    secdiv.append(secimg,cart);
    // console.log(x);
      secwindow.append(secdiv);
}}



}



// secondwindow ends------------------------------------------------------------
let c = 0;
extra = document.getElementById("extra")
more = document.getElementById("more");

more.addEventListener("click",function(){
    if(c%2==0){
        extra.style.display = "block";
        c++;
    }
else{
    extra.style.display = "none";
    c++
}
})

