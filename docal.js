//$('form').submit(function(){
//    console.log("start...");
//    st="";
//    $('li.docalfield').each( function (i) {
//        st = st + ":" + i + ":" + $(this).name + ":" + $(this).value;
//    });
//    $('div.results').text(st);
// });
var docalvalue = 44;
var docalmsg = "";
var backbutton = "</br></br><FORM><INPUT TYPE='button' onClick='history.go(0)' VALUE='Back'></FORM>";


jQuery(document).ready(function(){
    	$('li.docalfield').filter(':nth-child(n+8)').addClass('hide');
	
	
	$('ul').on('click', 'li.docaltitle', function() {
		$(this).nextUntil('li.docaltitle').toggle(200);
		//$(this).nextUntil('li.docaltitle').slideDown(200);
		//$(this).prevAll('li.docalsubtitle').slideUp(200);
	});

/*
  $.getJSON('http://devops2max.com/docal.json', function(data) {
  alert("info:"+ data.base_dev.togaf);
  });
*/

  $("#docalform").on('submit', function( event ) {
       event.preventDefault();
       
       var docalFormData = $( "#docalform input:checked" ).serializeArray();
       
       // console.log(docalFormData);
       
       //alert('final val: ' + docalval);
        if (docalvalue<=50) {
            var gcolor = "Red";
            var message = "</br>Keep up the good work! Way to go!";
        }
        if (docalvalue>50 && docalvalue<=70) {
            var gcolor = "Orange";
            var message = "</br>You are almost there! Way to go!";
        }
        if (docalvalue>70) {
            var gcolor = "Green";
            var message = "</br>Congratulations! Your are rocking! Keep it up!";
        }
        docalval = "Your DevOps Score is:</br>" + "<b><font size='+5' color='" + gcolor + "'>" + docalvalue + "</font></b>";
        docalmsg = "<br><b>" + message + "</b>";

        $( "#docalform" ).slideUp(500, callback);
        
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
        };
  });
  
});

