

//Getting Input For quantity in td3 section



let cont = document.getElementById("cartproducts_at");

let table = document.getElementById("tbl_at");

let cart = JSON.parse(localStorage.getItem("cart"));
// console.log(cart);
var total = 0;

cart.forEach(function (user){
    // console.log(user);
    total+= parseInt(user.price);
    let tr = document.createElement("tr");
    tr.setAttribute("class","tblrow_at");
    
    let td1 = document.createElement("td");
    td1.innerHTML=`<img src="${user.img}" alt="">
                    <span>${user.name}</span>`;
    td1.setAttribute("class","carttd_at cartfontsize_at");

    let td2 = document.createElement("td");
    td2.innerHTML=`<div>${user.price}</div>`;
    td2.setAttribute("class","cartfontsize_at");

//////////TD3/////////////////////

    let td3 = document.createElement("td");
    td3.innerHTML=`<input type="text" name="quantity" id="prod_quantity_at">`;
    td3.setAttribute("class","carttd3_at");

/////////////////////////////////////    
//    document.getElementById("prod_quantity_at").addEventListener('change', changesubtotal);

    let td4 = document.createElement("td");
    td4.innerHTML=`<div>${user.price}</div>`;
    td4.setAttribute("class","carttd4_at cartfontsize_at");
    
    let deleteitem = document.createElement("div");
    deleteitem.innerHTML=`<div id="cartbtncontainer"><button onclick="funcdeleteitem()" id="carteditbutton_at">Edit</button>
                             <button onclick="funcdeleteitem('${user.name}')" id="cartdeletebutton_at">DeleteItem</button></div>`;
    let hr =  document.createElement("hr");

    tr.append(td1,td2,td3,td4);
    table.append(tr,deleteitem);


});

// console.log(total);

let tot = document.getElementById("total");
// tot.innerHTML="";
tot.innerHTML=`&#8377;${total}`;
// location.reload();

function funcdeleteitem(delet){
    cart = JSON.parse(localStorage.getItem("cart"));
    console.log(delet);

    cart.forEach(function(user){
        if(user.name==delet){
            total -= user.price;
            cart.splice(user,1);
            tot.innerHTML=`${total}`;
            location.reload();
        }
    })
    cart = localStorage.setItem("cart",JSON.stringify(cart));

}





