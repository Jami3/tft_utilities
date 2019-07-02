
let champions;
let classes;
let items;
let origins;

$(document).ready(()=>{
    $.ajax({url: "data/champions.json", success:(data)=>{
        champions = data;
        
            for(let index in champions){
                //console.log(champions[index]);
                
                $("#champList").append(`<img src="images/${champions[index].key}.jfif" id="${champions[index].key}"></img>`);
                
            }
       
        
    }})

    $.ajax({url: "data/origins.json", success:(data)=>{
        origins = data;
        
            for(let index in origins){
                //console.log(champions[index]);
                $("#origins").append(`<li><button class="origins" onclick="searchClick(this)">${origins[index].name}</button></li>`);
            }
    }})

    $.ajax({url: "data/classes.json", success:(data)=>{
        classes = data;
        
            for(let index in classes){
                //console.log(champions[index]);
                
                $("#classes").append(`<li><button class="classes" onclick="searchClick(this)">${classes[index].name}</button></li>`);
                
            }
       
        
    }})
    
});


function showAll(){
    let images = $("img");
    for(let i = 0; i < images.length; i++){
        images[i].style.display = "";
        console.log(images[i].style.display);
        
        
    }
}

function clearText(){
    $("#search")[0].value = "";
    showAll();
    //console.log($("#search")[0].value);
    
}

function searchClick(button){
    $("#search")[0].value = button.innerText.toLowerCase();
    search($("#search")[0]);
    
    
}


function search(searchBox){
    let searchText = searchBox.value;

    if(searchText === ""){
        showAll();
        return;
    }
    champs:
    for(let index in champions){
        if(champions[index].key.toLowerCase().includes(searchText.toLowerCase()) || champions[index].name.toLowerCase().includes(searchText.toLowerCase())){
            $(`#${champions[index].key}`).show();
            continue champs;
        }
        
        for(let champClass in champions[index].class){
            
            if(champions[index].class[champClass].toLowerCase().includes(searchText.toLowerCase())){
                $(`#${champions[index].key}`).show();
                //console.log(champClass);
                
                continue champs;
            }
        }


        for(let champOrigin in champions[index].origin){
            if(champions[index].origin[champOrigin].toLowerCase().includes(searchText.toLowerCase())){
                $(`#${champions[index].key}`).show();
                continue champs;
            }
        }



       /*
        champions[index].origin.forEach(element => {
            if(searchText.includes(element)){
                $(`#${champions[index].key}`).show();
                continue champs;
            }
        });*/
        
        $(`#${champions[index].key}`).hide();
    }
}