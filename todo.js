$("ul").on("click","li",function(){
    //1.method
/*if($(this).css("color")==="rgb(128, 128, 128)")
	{  
		$(this).css({
		   color:"pink",
           textDecoration:"none"
		});
	}
	else
	{
	 $(this).css({
		color:"grey",
		textDecoration:"line-through"
	  });
    }
    */
    //2.method using css
      $(this).toggleClass("completed");
})  

  //remove list
  $("ul").on("click","span",function(event){             //instead of fadeout() we can use remove() also
  	    $(this).parent().fadeOut(500,function(){ //$(this).parent() it means li which is parent of span 
  	    	$(this).remove();
  	    });
        event.stopPropagation();  //just stop after click this otherwise it comes under li,span,container,body so to get rid of this we create thus
  });
  //add list
  $('input[type="text"').keypress(function(event){ //u can take any value as an event
  	 
  	 if(event.which===13){//here which has key value which are 13 means u enter button hits
  	 var addText=$(this).val();
     $(this).val(" ");
     $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span><b> " +addText+ "</b></li>");
    }
  });

  $('.fa-plus').click(function(){
  	 $('input[type="text"').fadeToggle();
  });
