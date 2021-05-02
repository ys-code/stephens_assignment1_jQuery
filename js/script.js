$(document).ready(function(){
    
      $("section h2, aside h2").css({
          "border": "1px solid black",
          "color": "#CC1C0D",
          "padding":"3px 20px 3px 20px",
          "borderRadius":"5px",
          "backgroundColor":"#DFE3E6"      
        });
      $("nav ul li a").addClass("navigation")
                    .css({
                            "border": "1px solid #929CA4", 
                            "color" : "#CC1C0D",
                            "padding":"3px 20px 3px 20px",
                            "backgroundColor":"#DFE3E6"
                        });
      $("section p").removeAttr("class");
      $("aside p:last-of-type").append('<br>Chevy Dealers Association');
      $("aside p:first-of-type").wrapInner("<q></q>");
      //Events
      $("#buttona1").click(function(){
            window.alert('Button1 is clicked!');
        });
      $("#buttona2").bind("click", function(){
            window.alert("Button2 was clicked with bind method.");
        }); 
      $("#buttona3").on("click",function(){
            window.alert("Button3 was clicked with on method.")
        });
      $("#div2").on("click","#buttona,#buttonb",function(e)
        {
            let btn=e.currentTarget;
            window.alert(`${btn.value} is clicked`);
        });
        //click mouseenter mouseleave 1
      /*$("#div3").on('click mouseenter mouseleave',function(e){
          window.alert(e.type);
        });*/
        $("#div3").on({
            mouseenter:function(e){window.alert(e.type);},
            mouseleave:function(e){window.alert(e.type);},
            click     :function(e){window.alert(e.type);}
        })
        //click mouseenter mouseleave 2
      $("#div4").on('click mouseenter mouseleave',function(e){  
            $(e.currentTarget).text(e.type);
        });
        //a tag
        $("#div5 a").on("click",function(e){
            e.preventDefault();
            $(this).css('color','red');
            window.alert(`Node name: ${e.target.nodeName}`);
        });
        $(window).on("resize",function(){
            let w=window.outerWidth;
            let h=window.outerHeight;
            $("#div6").text(`Browser dimension: width is ${w}, height is ${h}`);
        });/*
        $("input[value='text box 1']").on('focuse',function(){
             $("input").css('backgroundColor','green');
        });
        })*/
        //change text field background color with focus event
        $("input[placeholder=text1]").on("focus blur",function(e){
            let eType=e.type;
            console.log(eType);
            if(eType ==='focus'){$("input[placeholder=text1]").css("background-color", "grey");}
            else{$("input[placeholder=text1]").css("background-color", "white");} 
        });
        //form
        $("form").submit(function(e){
            e.preventDefault();
            const email=$("#email").val();
            const name=$("#name").val();
            if(email == ""){
                alert(`e-mail is required`);
                $("#email").css("border", "1px solid red");
                }else{$("#email").css("border", "1px solid green");}
            if(name == ""){
                alert(`Name is required`);
                $("#name").css("border", "1px solid red");
                }else{$("#name").css("border", "1px solid green");}
        });
    });