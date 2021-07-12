// database
var products = [
    { title:"Samsung A12", price:1200 , category:"SMART-PHONE", imgURL:"https://www.samsungtunisie.tn/4395-large_default/samsung-galaxy-a12-prix-tunisie.jpg" },
    { title:"Samsung A31", price:4200 , category:"SMART-PHONE", imgURL:"https://www.notebookcheck.net/uploads/tx_nbc2/SamsungGalaxyA31__1_.JPG" },
    { title:"Samsung 40' SMART", price:8000 , category:"TV", imgURL:"https://images.samsung.com/is/image/samsung/levant-hdtv-n4000-global-ua43n5000arxtw-frontblack-113496207?$720_576_PNG$" },
    { title:"LG 40' SMART", price:8500 , category:"TV", imgURL:"https://www.lg.com/us/images/tvs/md05610732/gallery/medium01.jpg" },

]

var productsResult = [
    { title:"Samsung A12", price:1200 , category:"SMART-PHONE", imgURL:"https://www.samsungtunisie.tn/4395-large_default/samsung-galaxy-a12-prix-tunisie.jpg" },
    { title:"Samsung A31", price:4200 , category:"SMART-PHONE", imgURL:"https://www.notebookcheck.net/uploads/tx_nbc2/SamsungGalaxyA31__1_.JPG" },
    { title:"Samsung 40' SMART", price:8000 , category:"TV", imgURL:"https://images.samsung.com/is/image/samsung/levant-hdtv-n4000-global-ua43n5000arxtw-frontblack-113496207?$720_576_PNG$" },
    { title:"LG 40' SMART", price:8500 , category:"TV", imgURL:"https://www.lg.com/us/images/tvs/md05610732/gallery/medium01.jpg" },

]


var category = [
    { id:"SMART-PHONE", value:"Smart phone" },
    { id:"TV", value:"tv" },
    
]

 

var productListBloc = document.getElementById("product-list");

// input search
var keySearchInput = document.getElementById('key-search');


// category search
var categorySearchSelect = document.getElementById('category-search');

// price search
var priceSlider = document.getElementById('price-search');

priceSlider.addEventListener('change',(e)=>{
    let p = e.target.value;

    /**
     * p = >
     * 100 = > max
     */

    let amount = ((p * maxPrice()) / 100);
 
    document.getElementById('price-value').innerHTML = (amount+' $')


    productsResult = searchByPrice(amount);

    
    let htmlBloc = '';

    productsResult.map((p)=>{
        htmlBloc+='<div class="col-sm-12 col-md-3 mb-3">';
        htmlBloc+='<div class="card" style="width: 100%">';
        htmlBloc+='   <img src="'+p.imgURL+'" class="card-img-top" alt="...">';
        htmlBloc+='    <div class="card-body">';
        htmlBloc+='      <h5 class="card-title">'+p.title+'</h5> ';
        htmlBloc+='      <p> '+p.price+' $ </p>';
        htmlBloc+='    </div>';
        htmlBloc+='  </div>';
        htmlBloc+='</div>';
    })

    productListBloc.innerHTML = htmlBloc;

})



// init categry


function initCategories(){
    let blocHTML = '<option value="">please choose a value</option>';
    category.map((c)=>{
        blocHTML+='<option value="'+c.id+'" >'+c.value+'</option>';
    })

    categorySearchSelect.innerHTML = blocHTML;
}


// search

categorySearchSelect.addEventListener('change',(e)=>{
    const id = e.target.value;
    
    let res = searchByCategory(id);

    let htmlBloc = '';

    res.map((p)=>{
        htmlBloc+='<div class="col-sm-12 col-md-3 mb-3">';
        htmlBloc+='<div class="card" style="width: 100%">';
        htmlBloc+='   <img src="'+p.imgURL+'" class="card-img-top" alt="...">';
        htmlBloc+='    <div class="card-body">';
        htmlBloc+='      <h5 class="card-title">'+p.title+'</h5> ';
        htmlBloc+='      <p> '+p.price+' $ </p>';
        htmlBloc+='    </div>';
        htmlBloc+='  </div>';
        htmlBloc+='</div>';
    })

    productListBloc.innerHTML = htmlBloc;
})




keySearchInput.addEventListener('keyup',(e)=>{
    const q = e.target.value;


    productsResult = searchByKeyWords(q);

    
    let htmlBloc = '';

    productsResult.map((p)=>{
        htmlBloc+='<div class="col-sm-12 col-md-3 mb-3">';
        htmlBloc+='<div class="card" style="width: 100%">';
        htmlBloc+='   <img src="'+p.imgURL+'" class="card-img-top" alt="...">';
        htmlBloc+='    <div class="card-body">';
        htmlBloc+='      <h5 class="card-title">'+p.title+'</h5> ';
        htmlBloc+='      <p> '+p.price+' $ </p>';
        htmlBloc+='    </div>';
        htmlBloc+='  </div>';
        htmlBloc+='</div>';
    })

    productListBloc.innerHTML = htmlBloc;


})


function initProductBloc(){
    let htmlBloc = '';

    products.map((p)=>{
        htmlBloc+='<div class="col-sm-12 col-md-3 mb-3">';
        htmlBloc+='<div class="card" style="width: 100%">';
        htmlBloc+='   <img src="'+p.imgURL+'" class="card-img-top" alt="...">';
        htmlBloc+='    <div class="card-body">';
        htmlBloc+='      <h5 class="card-title">'+p.title+'</h5> ';
        htmlBloc+='      <p> '+p.price+' $ </p>';
        htmlBloc+='    </div>';
        htmlBloc+='  </div>';
        htmlBloc+='</div>';
    })

    productListBloc.innerHTML = htmlBloc;
}


initProductBloc();
initCategories();


function searchByKeyWords( str ){
    return products.filter((p)=> p.title.toLowerCase().indexOf(str.toLowerCase()) != -1 );
}


function searchByPrice( price ){
    return productsResult.filter((p)=> p.price <= price  );
}


function searchByCategory(id){
    if (id == '') {
        return productsResult;
    }else{
        return productsResult.filter((p)=> p.category == id );
    }
}


function maxPrice() {
    let max  = 0;
    products.map((p)=>{
        if (p.price > max) {
            max = p.price
        }
    })

    return max;
}


document.getElementById('price-value').innerHTML = (maxPrice()+' $')


document.getElementById('search-btn').addEventListener('click',()=>{
    //
    let htmlBloc = '';
    
    let q = keySearchInput.value;

    let c = categorySearchSelect.value;

    let a = priceSlider.value;


    let amount = ((a * maxPrice()) / 100);
 


    console.log(a,c,q);


    let final = products.filter((p)=>
    
        ( p.title.toLowerCase().indexOf(q.toLowerCase()) != -1) &&

        ( p.price <= amount ) && 

        ( p.category == c)

        

    )


    final.map((p)=>{
        htmlBloc+='<div class="col-sm-12 col-md-3 mb-3">';
        htmlBloc+='<div class="card" style="width: 100%">';
        htmlBloc+='   <img src="'+p.imgURL+'" class="card-img-top" alt="...">';
        htmlBloc+='    <div class="card-body">';
        htmlBloc+='      <h5 class="card-title">'+p.title+'</h5> ';
        htmlBloc+='      <p> '+p.price+' $ </p>';
        htmlBloc+='    </div>';
        htmlBloc+='  </div>';
        htmlBloc+='</div>';
    })

    productListBloc.innerHTML = htmlBloc;
})