var pencil = {name: "Pencil", obtained: false};
var bread = {name: "Aqua Bread", obtained: false};
var sundae = {name: "Sundae", obtained: false};
var inventory = [pencil, bread, sundae];

$(document).ready(function(){
    ////////////////////////////////
    $("#0a").click(function(){
        $("#State1").show();
        $("#State0").hide();
    });
    $("#0b").click(function(){
        $("#State2").show();
        $("#State0").hide();
     });
    //////////////////////////////// 
    $("#1a").click(function(){
        if(inventory[0].obtained){
            inventory[0].obtained = false;
            $("#list").text("Obtained Item(s): Empty");
            $("#State3").show();
        }
        else $("#State11").show();
        $("#State1").hide();
    });
    $("#1b").click(function(){
        $("#State12").show();
        $("#State1").hide();
     });
     ////////////////////////////////
     $("#2a").click(function(){
         $("#State4").show();
         $("#State2").hide();
     });
     ///////////////////////////////
     $("#3a").click(function(){
         $("#State5").show();
         $("#State3").hide();
     });
     //////////////////////////////
     $("#4a").click(function(){
         inventory[0].obtained = true;
         $("#State1").show();
         $("#State4").hide();
         $("#list").text("Obtained Item(s): "+inventory[0].name);
     });
     /////////////////////////////
     $("#5a").click(function(){
         $("#State6").show();
         $("#State5").hide();
     });
     $("#5b").click(function(){
         $("#State10").show();
         $("#State5").hide();
     });
     ////////////////////////////
     $("#6a").click(function(){
         $("#State7").show();
         $("#State6").hide();
     });
     $("#6b").click(function(){
         $("#State8").show();
         $("#State6").hide();
     });
     ///////////////////////////
     $("#7a").click(function(){
         inventory[1].obtained=true;
         $("#State9").show();
         $("#State7").hide();
         $("#list").text("Obtained Item(s): "+inventory[1].name);
     });
     $("#7b").click(function(){
         $("#State8").show();
         $("#State7").hide();
     });
     ///////////////////////////
     $("#8a").click(function(){
         inventory[2].obtained = true;
         $("#State9").show();
         $("#State8").hide();
         $("#list").text("Obtained Item(s): "+inventory[2].name);
     });
     $("#8b").click(function(){
         $("#State7").show();
         $("#State8").hide();
     });
     ///////////////////////////
     $("#9a").click(function(){
        if(inventory[1].obtained){
            inventory[1].obtained=false;
            $("#State13").show();
        }
        if(inventory[2].obtained){
            inventory[2].obtained=false;
            $("#State14").show();
        }
        $("#State9").hide();
        $("#list").text("Obtained Item(s): Empty");
     });
     //////////////////////////
     $("#10a").click(function(){
         $("#Ending0").show();
         $("#State10").hide();
     });
     //////////////////////////////
     $("#11a").click(function(){
         $("#Ending0").show();
         $("#State11").hide();
         $("#list").text("");
     });
     ///////////////////////////////
     $("#12a").click(function(){
         $("#Ending0").show();
         $("#State12").hide();
         $("#list").text("");
     });
     ///////////////////////////////
     $("#13a").click(function(){
         $("#Ending1").show();
         $("#State13").hide();
         $("#list").text("");
     });
     ///////////////////////////////
     $("#14a").click(function(){
         $("#Ending2").show();
         $("#State14").hide();
         $("#list").text("");
     });
});