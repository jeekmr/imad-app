/*console.log('Loaded!');
var element= document.getElementById('para');
element.innerHTML='new value';

var img=document.getElementById('madi');

var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft= marginLeft +'px';
}

img.onclick=function(){
    var interval=setInterval(moveRight,100);
    
   
};*/
//counter code


var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
     counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
    
}; 

//listing names

var nameInput =document.getElementById('name');
var name =nameInput.value;
var submit= document.getElementById('submitbutton')
submit.onclick=function(){ 
    
    
    
    var names=['name1','name2','name3'];
    var list='';
    for(var i=0;i<=names.length;i++){
        lsit += '<li>'+ names[i]+ '</li>'
        
        var ul=document.getElementById('listname');
        ul.innerHTML=list;
        
    }
}















