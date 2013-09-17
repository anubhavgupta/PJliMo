var index=function(){};
index.prototype=new Page();
index.prototype.constructor=index;

index.prototype.startup=function(){

    alert("This is started..." );
};

index.prototype.createStructure =function(){
    var wrapper=document.createElement("div");

        var heading=document.createElement("h1");
        var para=document.createElement("p");

        heading.innerHTML="Hello World";
        para.innerHTML="This is Index Page.";

    wrapper.appendChild(heading);
    wrapper.appendChild(para);

    return wrapper;
};
//
limo.init(index);
