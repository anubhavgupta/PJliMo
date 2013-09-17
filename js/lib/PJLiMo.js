/**
 * User: Anubhav
 * Date: 9/18/13
 * Time: 12:06 AM
 *
 * //MIT Licence
 */


(function(d,w){



    // Page Interface
    this.Page= function(){
        this.startup=function(){};
        this.createStructure=function(){};
        this.loadContent=function(){};
        this.loadEvents=function(){};
        this.onPageUnload=function(){};
    };


    var self=this;
    var pageCont=null;
    this.limo = new function (){


      /* this.viewTree={
            "/":{
                *//*vars:["attr1","attr2"],*//*
                pageNode:"js/pages/index.js"
            }
        };*/


        this.classList=[];


        this.setPage=function(contentNode,pageContainer){

            if(pageContainer)
            {
                pageCont=pageContainer;
            }
            pageCont.appendChild(contentNode);

        };

        this.init=function(pageClass){
            var pageObj=new pageClass();
            pageObj.startup();
            limo.setPage(pageObj.createStructure());
        };

    };

    document.addEventListener("DOMContentLoaded",function(){

        //preload
        pageCont=document.getElementsByTagName("body")[0];

        var newPage=document.createElement("script");
        newPage.src="js/pages/index.js";
        newPage.type="text/javascript";
        var header=document.getElementsByTagName("head")[0];
        header.insertBefore(newPage,header.children[0]);


        //TODO:- start according to path/...

    },false);

}(document,window))

