console.firebug=true;
var docalmsg = "";
var backbutton = "<form><input type='button' onclick='history.go(0)' value='Back' /></form>";

  jQuery(document).ready(function($) {
// Inside of this function, $() will work as an alias for jQuery()
// and other libraries also using $ will not be accessible under this shortcut
// $('p').css('color','red');

// Hide and Toggle fields
  $('li.docalfield').filter(':nth-child(n+8)').addClass('hide');

  $('ul').on('click', 'li.docaltitle', function() {
   	$(this).nextUntil('li.docaltitle').toggle(200);
	//$(this).nextUntil('li.docaltitle').slideDown(200);
	//$(this).prevAll('li.docalfield').slideUp(200);
  });
  
  // Docal form
   $("#docalform").on('submit', function( event ) {
       event.preventDefault();
        var docalval = 0;
  
    $.getJSON('https://s3-us-west-2.amazonaws.com/dops-conf/docal.json', function(docaldata) {
        //console.log("zacman:" + docaldata.base_dev.togaf);
        //console.log(docaldata);
       var docalFormData = $( "#docalform input:checked" ).serializeArray();
       //console.log(docalFormData);

        $.each(docalFormData, function(i, va) {
            var doname = va.name;
            var doval = va.value;
           // console.log( "check:" + doname + ":" + doval);
            docalval =  docalval + docaldata[doname][doval];
        });
        // return docalObject;
        // console.log(docalval);

       if (docalval<=50) {
            var gcolor = "Red";
            var message = "Keep up the good work! Way to go!";
        }
        if (docalval>50 && docalval<=70) {
            var gcolor = "Orange";
            var message = "You are almost there! Way to go!";
        }
        if (docalval>70) {
            var gcolor = "Green";
            var message = "Wow! Your are rocking! Keep it up!";
        }
        docalval = "Your DevOps Score is: " + "<b><font size='+5' color='" + gcolor + "'>" + docalval + " %</font></b>";
        docalmsg = "<br /><b>" + message + "</b>";

        $( "#docalform" ).hide(50, callback);
        
        function callback () {           
            document.getElementById("docalresults").innerHTML=docalval;
            $( "#docalresults" ).addClass( "docalresultclass");
            document.getElementById("docallegend1").innerHTML="Beginner";
            $( "#docallegend1" ).addClass( "docallegend1");
            document.getElementById("docallegend2").innerHTML="Proficient";
            $( "#docallegend2" ).addClass( "docallegend2");
            document.getElementById("docallegend3").innerHTML="Expert";
            $( "#docallegend3" ).addClass( "docallegend3");
            document.getElementById("docalmessage").innerHTML=docalmsg + backbutton;

            $('html, body').animate({ scrollTop: $("#main").offset().top }, 50);
        };
       
       //alert("final: " + docalval);    

     });

   });
});
