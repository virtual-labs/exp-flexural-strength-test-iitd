function navNext1()

{

        document.getElementById("canvas1").style.visibility="hidden";

        document.getElementById("canvas2").style.visibility="visible";//canvas2      

}



function navNext2()

{

        document.getElementById("canvas2").style.visibility="hidden";

        document.getElementById("canvas3").style.visibility="visible";//canvas3

        document.getElementById("arrowcube1").style.visibility="visible";

        document.getElementById("cubefromtanktb1").style.visibility="visible";
        //Month Print
        document.getElementById("demotank1").innerHTML = logo.getMonth() + 1;
        //Date Print
        document.getElementById("demotank2").innerHTML = logo.getDate();

        document.getElementById("cubedatehidden2").style.visibility="visible";
        //Month Print
        document.getElementById("demotank11").innerHTML = logo.getMonth() + 1;
        //Date Print
        document.getElementById("demotank12").innerHTML = logo.getDate();
        
        document.getElementById("cubedatehidden3").style.visibility="visible";
        //Month Print
        document.getElementById("demotank21").innerHTML = logo.getMonth() + 1;
        //Date Print
        document.getElementById("demotank22").innerHTML = logo.getDate();
        
        document.getElementById("cubedatehidden4").style.visibility="visible";

}



function navNext3()

{

        document.getElementById("canvas3").style.visibility="hidden";

        document.getElementById("canvas4").style.visibility="visible";

          //Month Print
        document.getElementById("demotank31").innerHTML = logo.getMonth() + 1;
        //Date Print
        document.getElementById("demotank32").innerHTML = logo.getDate();
        
        document.getElementById("cubedatehidden5").style.visibility="visible";
        document.getElementById("cubefromctm_tb").style.visibility="visible";

}



function navNext4()

{

        document.getElementById("canvas4").style.visibility="hidden";

        document.getElementById("canvas5").style.visibility="visible";

        document.getElementById("arrow4").style.visibility="visible";

        //document.getElementById("cubedatehidden").style.visibility="visible";
}


function navNext5()

{

        document.getElementById("canvas5").style.visibility="hidden";

        document.getElementById("canvas6").style.visibility="visible";

        document.getElementById("arrow6").style.visibility="visible";

        /*Countdown Timer Animation Code Start*  
        function animateValue(id, start, end, duration) {
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() 
                {
                    current += increment;
                    obj.innerHTML = current;
                    if (current == end) 
                    {
                        clearInterval(timer);
                    }
                }, stepTime);
        }

        animateValue("value", 0, 250, 7000);
        /*Countdown Timer Animation Code End*/

}


function navNext6()

{

        document.getElementById("canvas6").style.visibility="hidden";

        document.getElementById("canvas7").style.visibility="visible";

        

        //document.getElementById("cubedatehidden").style.visibility="visible";
}

function navNext7()

{

        document.getElementById("canvas7").style.visibility="hidden";

        document.getElementById("canvas8").style.visibility="visible";

        document.getElementById("larrow6").style.visibility="visible";

}
function navNext8()
{

        document.getElementById("canvas8").style.visibility="hidden";

        document.getElementById("canvas9").style.visibility="visible";

        

    if (size == 500)//numbox == 2.33 && size == 10)
    {
        document.getElementById("abox").innerHTML = 120; 
    }
    else if (size == 700)//numbox == 5.25 && size == 15)
    {
        document.getElementById("abox").innerHTML = 155;
    }
    else
    {
        alert("Wrong");
    }

}

function navNext9()
{

        document.getElementById("canvas9").style.visibility="hidden";

        document.getElementById("canvas10").style.visibility="visible";

        document.getElementById("rarrow6").style.visibility="visible";

}

function navNext10()
{

        document.getElementById("canvas10").style.visibility="hidden";

        document.getElementById("canvas11").style.visibility="visible";

        

        if (size == 500)//numbox == 2.33 && size == 10)
        {
            document.getElementById("bbox").innerHTML = 99; 
        }
        else if (size == 700)//numbox == 5.25 && size == 15)
        {
            document.getElementById("bbox").innerHTML = 148;
        }
        else
        {
            alert("Wrong");
        }

}

function navNext11()
{

        document.getElementById("canvas11").style.visibility="hidden";

        document.getElementById("canvas12").style.visibility="visible";

        document.getElementById("sarrow6").style.visibility="visible";

}

function navNext12()
{

        document.getElementById("canvas12").style.visibility="hidden";

        document.getElementById("canvas13").style.visibility="visible";

        

}

function navNext13()
{

        document.getElementById("canvas13").style.visibility="hidden";

        document.getElementById("canvas14").style.visibility="visible";

}

function navNext14()
{

        document.getElementById("canvas14").style.visibility="hidden";

        document.getElementById("canvas15").style.visibility="visible";

}

function navNext15()
{

        document.getElementById("canvas15").style.visibility="hidden";

        document.getElementById("canvas16").style.visibility="visible";

}
/*function navNext5()

{

        document.getElementById("canvas5").style.visibility="hidden";

        document.getElementById("canvas6").style.visibility="visible";

}

function navBack2()

{

	    document.getElementById("canvas2").style.visibility="hidden";

        document.getElementById("details").style.visibility="hidden";

        document.getElementById("canvas1").style.visibility="visible";

}



function navBack3()

{

	    document.getElementById("canvas3").style.visibility="hidden";

        document.getElementById("clothforcube").style.visibility="hidden";

        document.getElementById("canvas2").style.visibility="visible";

}



function navBack4()

{

	    document.getElementById("canvas4").style.visibility="hidden";

       

        document.getElementById("canvas3").style.visibility="visible";



}

*/

var size = 0;
var age = 0;
var logo= 0;
var sone= 0;
var stwo= 0;
var sthree= 0;
var sfour= 0;
var z = 0;

var rapt = 0;
var rapt2 = 0;
var rapt3 = 0;
var printavg = 0;
var printavg2 = 0;

function agesizeIn()

{

    age = document.getElementById("ageIn").value;

    size = document.getElementById("sizeIn").value;

if (age !== "" && size > 0)
    {
        //alert(age);
        //alert(size);
        //document.getElementById("numoutnext").innerHTML = "Click Next";
        document.getElementById("arrowcubox").style.visibility="visible";
        document.getElementById("nextButton2").style.visibility="visible";
        document.getElementById("fillBox").innerHTML = "&nbsp;";

        document.getElementById("details").style.visibility="visible";

    




   //------------------------------------------ 
    // JavaScript program to illustrate 
    // calculation of no. of days between two date 

    // To set two dates to two variables 
var date1 = new Date(age); 
var today = new Date(); 

// To calculate the time difference of two dates 
var Difference_In_Time = today.getTime() - date1.getTime(); 
 
// To calculate the no. of days between two dates 
var Difference_In_Days = (Difference_In_Time / (1000 * 3600 * 24 ));


 z = Math.floor(Difference_In_Days); //change Float to integer

   //alert("Converted value of " + Difference_In_Days + " is " + z);

//----------------------------------------
//Global Variable Print Date in Cube

logo = new Date(date1);

//Month Print
document.getElementById("demo").innerHTML = logo.getMonth() + 1;
//Date Print
document.getElementById("demo2").innerHTML = logo.getDate();
//Year Print
//document.getElementById("demo3").innerHTML = logo.getFullYear();

//-----------------------------------------------
document.getElementById("cubedatehidden").style.visibility="visible";

    

    //document.getElementById("nav").style.visibility="visible";



    document.getElementById("age").innerHTML= z + " Days Old";//age;

    

    //document.getElementById("cs").innerHTML= size*size;

    document.getElementById("num").innerHTML="3";
    if (size == 500)
    {
    document.getElementById("size").innerHTML= 100+"x"+100+"x"+size+" mm";

    document.getElementById("sizec1").innerHTML= 100 + "mm";

    document.getElementById("sizec2").innerHTML= 100 + "mm";

    document.getElementById("sizec3").innerHTML= 500 + "mm";
    }
    else if (size == 700)
    {
    document.getElementById("size").innerHTML=  150+"x"+150+"x"+size+" mm";

    document.getElementById("sizec1").innerHTML= 150 + "mm";

    document.getElementById("sizec2").innerHTML= 150 + "mm";

    document.getElementById("sizec3").innerHTML= 700 + "mm";   
        
    }
    else
    {
        //alert("Wrong"); 
    }
}
    
    else
    {
        document.getElementById("fillBox").innerHTML = "Please Enter all Values";
        //alert("Wrong");
        
    }
    

}


function tunnu()

{
    //var ctext = Click Next ;
    var numbox = document.getElementById("quantity").value;
    //alert(size);
    //alert(numbox);
    if (numbox == 1.80 && size == 500)
    {
        
        document.getElementById("numoutnext").innerHTML = "Click Next";
        document.getElementById("arrow5").style.visibility="visible";
        document.getElementById("nextButton5").style.visibility="visible";
    }
    
    else if (numbox == 4.00 && size == 700)
    {
        
        document.getElementById("numoutnext").innerHTML = "Click Next";
        document.getElementById("arrow5").style.visibility="visible";
        document.getElementById("nextButton5").style.visibility="visible";
    }
    else
    {
        document.getElementById("numoutnext").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>1.80 for<br>100X100X500mm<br>speciman<br><br>4.00 for<br>150X150X700mm<br>speciman";
        
    }
}



function movecube()
{
    document.getElementById("cubefromtanktb1").style.visibility="hidden";
    document.getElementById("cubefromtank1").style.animation="cubeFromCuringTank1 2s forwards";
    document.getElementById("cubedatehidden2").style.animation="cubedateFromCuringTank1 2s forwards";

    //document.getElementById("clothforcube").style.visibility="visible";
    document.getElementById("arrowcube1").style.visibility="hidden";
    
    document.getElementById("arrowcube2").style.visibility="visible";
    document.getElementById("cubefromtanktb2").style.visibility="visible";
}

function mcurcube1()
{
    document.getElementById("cubefromtanktb2").style.visibility="hidden";
    document.getElementById("cubefromtank2").style.animation="cubeFromCuringTank2 2s forwards";
    document.getElementById("cubedatehidden3").style.animation="cubedateFromCuringTank2 2s forwards";

    //document.getElementById("clothforcube").style.visibility="visible";
    document.getElementById("arrowcube2").style.visibility="hidden";

    document.getElementById("arrowcube3").style.visibility="visible";
    document.getElementById("cubefromtanktb3").style.visibility="visible";
}

function mcurcube2()
{
    document.getElementById("cubefromtanktb3").style.visibility="hidden";
    document.getElementById("cubefromtank3").style.animation="cubeFromCuringTank 2s forwards";
    document.getElementById("cubedatehidden4").style.animation="cubedateFromCuringTank3 2s forwards";

    document.getElementById("arrowcube3").style.visibility="hidden";
    
    document.getElementById("arrowcube4").style.visibility="visible";

    document.getElementById("clothforcube").style.visibility="visible";

    document.getElementById("clothstep").style.visibility="visible";

}


function movecloth(){

   

    document.getElementById("clothforcube").style.animation="wipeOutMoisture 3.20s forwards";

    document.getElementById("arrowcube4").style.visibility="hidden";     

    setTimeout(function()

	{

	document.getElementById("cubefromtank1").src="images/cubeclear.png";
    document.getElementById("cubefromtank2").src="images/cubeclear.png";
    document.getElementById("cubefromtank3").src="images/cubeclear.png";
    document.getElementById("arrowcuringnext").style.visibility="visible";
    document.getElementById("nextButton3").style.visibility="visible";
    
	},1930);

   
}



function isInputNumber(evt)

{

    var ch = String.fromCharCode(evt.which);



    if(!(/[0-9]/.test(ch))){

        evt.preventDefault();

    }

}

function movecube1(){

    document.getElementById("cubefromctm_tb").style.visibility="hidden";

    document.getElementById("cubefromctm").style.animation="cubeFromctm 2s forwards";
    document.getElementById("cubedatehidden5").style.animation="cubedateFromctm 2s forwards";
    document.getElementById("arrow1").style.visibility="hidden";

    setTimeout(function()

    {
    //document.getElementById("cubefromctm").src="fitmachine.png";
    document.getElementById("cubefromctm").style.visibility="hidden";   
    document.getElementById("cuberotate").style.visibility="visible";
    document.getElementById("arrow2").style.visibility="visible";
    document.getElementById("cuberotate_tb").style.visibility="visible";
    },1750);
}

function movecube2()
{
    document.getElementById("cuberotate_tb").style.visibility="hidden";
    document.getElementById("cubedatehidden5").style.visibility="hidden";
    document.getElementById("cuberotate").style.animation="cubechange 2s forwards";
    document.getElementById("arrow2").style.visibility="hidden";
    setTimeout(function()

    {
        document.getElementById("cuberotate").style.visibility="hidden";
        document.getElementById("cubechangectm").style.visibility="visible";
        document.getElementById("arrow3").style.visibility="visible";
        // document.getElementById("cubechangectm_tb").style.visibility="visible";
    //document.getElementById("cuberotate").src="fitmachine.png";
    //document.getElementById("cuberotate").style.animation="cuberotate 3s forwards";
    },1750);

}

function movecube3(){

    document.getElementById("cubechangectm").style.animation="cubechangectm 3s forwards";

     document.getElementById("arrow3").style.visibility="hidden";

     document.getElementById("fitcubenext").style.visibility="visible";

     document.getElementById("nextButton4").style.visibility="visible";
}


function movecube4(){

    document.getElementById("arrow4").style.visibility="hidden";

    //document.getElementById("transnumbox1").style.animation="cubeFromCuringTank 2s forwards";
    document.getElementById("npadtext").style.visibility="visible";

    document.getElementById("numpadbig").style.visibility="visible";

}

/*scene 6 code start*/
function showbigclk()
{

    document.getElementById("arrow6").style.visibility="hidden";

    //document.getElementById("transnumbox1").style.animation="cubeFromCuringTank 2s forwards";

    document.getElementById("bigclock").style.visibility="visible";
    document.getElementById("pin1").style.visibility="visible";
    document.getElementById("pin2").style.visibility="visible";
    document.getElementById("clkdot").style.visibility="visible";

    document.getElementById("arrow7").style.visibility="visible";
    document.getElementById("strtbtn").style.visibility="visible";
    document.getElementById("startstep").style.visibility="visible";
    document.getElementById("clktable").style.visibility="visible";
}
    
function showmoveclk()
{
    document.getElementById("strtbtn").style.visibility="hidden";
    document.getElementById("arrow7").style.visibility="hidden";
    setTimeout(function()
    {
       if (size == 500)//numbox == 2.33 && size == 10)
        {
        
        document.getElementById("pin1").style.animation="clockpin10 4.20s forwards";
        document.getElementById("pin2").style.animation="clockpin210 4.00s forwards";

        /*Countdown Timer Animation Code Start*/  
        function animateValue(id, start, end, duration) {
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() 
                {
                    current += increment;
                    obj.innerHTML = current;
                    if (current == end) 
                    {
                        clearInterval(timer);
                    }
                }, stepTime);
        }

        animateValue("value", 0, 204, 2000);
        /*Countdown Timer Animation Code End*/
        document.getElementById("press1").style.visibility="visible";
        document.getElementById("press2").style.visibility="visible";

            setTimeout(function()
            {
            document.getElementById("stopstep").style.visibility="visible";
            document.getElementById("arrow8").style.visibility="visible";
            document.getElementById("stopbtn").style.visibility="visible";
            },3000); 
        
        //document.getElementById("stopstep").style.visibility="visible";
        //document.getElementById("arrow8").style.visibility="visible";
        //document.getElementById("stopbtn").style.visibility="visible";
        }
    
        else if (size == 700)//numbox == 5.25 && size == 15)
        {
        
        document.getElementById("pin1").style.animation="clockpin15 4.20s forwards";
        document.getElementById("pin2").style.animation="clockpin215 4.00s forwards";

        /*Countdown Timer Animation Code Start*/  
        function animateValue(id, start, end, duration) {
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() 
                {
                    current += increment;
                    obj.innerHTML = current;
                    if (current == end) 
                    {
                        clearInterval(timer);
                    }
                }, stepTime);
        }

        animateValue("value", 0, 210, 2500);
        /*Countdown Timer Animation Code End*/
        document.getElementById("press1").style.visibility="visible";
        document.getElementById("press2").style.visibility="visible";

            setTimeout(function()
            {
            document.getElementById("stopstep").style.visibility="visible";
            document.getElementById("arrow8").style.visibility="visible";
            document.getElementById("stopbtn").style.visibility="visible";
            },3000); 
        
        }
        else
        {
        //document.getElementById("numoutnext").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>233.33 for 10cm speciman<br><br>525.00 for 15cm speciman";
        alert("Wrong");
        } 
        


        document.getElementById("okcube").style.visibility="hidden";

            setTimeout(function()
            {
            document.getElementById("crekl").style.animation="crek1 1.20s forwards";
            document.getElementById("crekr").style.animation="crek2 1.20s forwards";
            document.getElementById("press1").style.visibility="hidden";
            document.getElementById("press2").style.visibility="hidden";
            },1750);    
    //img.setAttribute('style','transform:rotate(180deg)');
    },1850);

}


function stopmoveclk()
{
    document.getElementById("arrow8").style.visibility="hidden";
    document.getElementById("stopbtn").style.visibility="hidden";
    if (size == 500)//numbox == 2.33 && size == 10)
    {
    document.getElementById("loadfail").innerHTML = "6.125";
    document.getElementById("lfstep").style.visibility="visible";
    document.getElementById("arrow9").style.visibility="visible";
    document.getElementById("nextButton6").style.visibility="visible";
    }
    else if (size == 700)//numbox == 5.25 && size == 15)
    {
    document.getElementById("loadfail").innerHTML = "14.06";
    document.getElementById("lfstep").style.visibility="visible";
    document.getElementById("arrow9").style.visibility="visible";
    document.getElementById("nextButton6").style.visibility="visible";
    }
    else
    {
        alert("Wrong");
    }
    

}

/*scene 6 code end*/


/*scene 8 code start*/
function lshowbigclk()
{

    document.getElementById("larrow6").style.visibility="hidden";

    //document.getElementById("transnumbox1").style.animation="cubeFromCuringTank 2s forwards";

    document.getElementById("lbigclock").style.visibility="visible";
    document.getElementById("lpin1").style.visibility="visible";
    document.getElementById("lpin2").style.visibility="visible";
    document.getElementById("lclkdot").style.visibility="visible";

    document.getElementById("larrow7").style.visibility="visible";
    document.getElementById("lstrtbtn").style.visibility="visible";
    document.getElementById("lstartstep").style.visibility="visible";
    document.getElementById("lclktable").style.visibility="visible";
}
    
function lshowmoveclk()
{
    document.getElementById("lstrtbtn").style.visibility="hidden";
    document.getElementById("larrow7").style.visibility="hidden";
    setTimeout(function()
    {
       if (size == 500)//numbox == 2.33 && size == 10)
        {
        
        document.getElementById("lpin1").style.animation="lclockpin10 4.20s forwards";
        document.getElementById("lpin2").style.animation="lclockpin210 4.00s forwards";

        /*Countdown Timer Animation Code Start */ 
        function animateValue(id, start, end, duration) {
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() 
                {
                    current += increment;
                    obj.innerHTML = current;
                    if (current == end) 
                    {
                        clearInterval(timer);
                    }
                }, stepTime);
        }

        animateValue("lvalue", 0, 144, 2000);
        /*Countdown Timer Animation Code End*/
        document.getElementById("lpress1").style.visibility="visible";
        document.getElementById("lpress2").style.visibility="visible";

            setTimeout(function()
            {
            document.getElementById("lstopstep").style.visibility="visible";
            document.getElementById("larrow8").style.visibility="visible";
            document.getElementById("lstopbtn").style.visibility="visible";
            },3000); 
        
        //document.getElementById("stopstep").style.visibility="visible";
        //document.getElementById("arrow8").style.visibility="visible";
        //document.getElementById("stopbtn").style.visibility="visible";
        }
    
        else if (size == 700)//numbox == 5.25 && size == 15)
        {
        
        document.getElementById("lpin1").style.animation="lclockpin15 4.20s forwards";
        document.getElementById("lpin2").style.animation="lclockpin215 4.00s forwards";

        /*Countdown Timer Animation Code Start */ 
        function animateValue(id, start, end, duration) {
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() 
                {
                    current += increment;
                    obj.innerHTML = current;
                    if (current == end) 
                    {
                        clearInterval(timer);
                    }
                }, stepTime);
        }

        animateValue("lvalue", 0, 181, 2500);
        /*Countdown Timer Animation Code End*/
        document.getElementById("lpress1").style.visibility="visible";
        document.getElementById("lpress2").style.visibility="visible";

            setTimeout(function()
            {
            document.getElementById("lstopstep").style.visibility="visible";
            document.getElementById("larrow8").style.visibility="visible";
            document.getElementById("lstopbtn").style.visibility="visible";
            },3000); 
        
        }
        else
        {
        //document.getElementById("numoutnext").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>233.33 for 10cm speciman<br><br>525.00 for 15cm speciman";
        alert("Wrong");
        } 
        


        document.getElementById("lokcube").style.visibility="hidden";

            setTimeout(function()
            {
            document.getElementById("lcrekl").style.animation="lcrek1 1.20s forwards";
            document.getElementById("lcrekr").style.animation="lcrek2 1.20s forwards";
            document.getElementById("lpress1").style.visibility="hidden";
            document.getElementById("lpress2").style.visibility="hidden";
            },1750);    
    //img.setAttribute('style','transform:rotate(180deg)');
    },1850);

}


function lstopmoveclk()
{
    document.getElementById("larrow8").style.visibility="hidden";
    document.getElementById("lstopbtn").style.visibility="hidden";
    if (size == 500)//numbox == 2.33 && size == 10)
    {
    document.getElementById("lloadfail").innerHTML = "4.32";
    document.getElementById("llfstep").style.visibility="visible";
    document.getElementById("larrow9").style.visibility="visible";
    document.getElementById("nextButton8").style.visibility="visible";
    }
    else if (size == 700)//numbox == 5.25 && size == 15)
    {
    document.getElementById("lloadfail").innerHTML = "12.10";
    document.getElementById("llfstep").style.visibility="visible";
    document.getElementById("larrow9").style.visibility="visible";
    document.getElementById("nextButton8").style.visibility="visible";
    }
    else
    {
        alert("Wrong");
    }
    

}

/*scene 8 code end*/


/*scene 10 code start*/
function rshowbigclk()
{

    document.getElementById("rarrow6").style.visibility="hidden";

    //document.getElementById("transnumbox1").style.animation="cubeFromCuringTank 2s forwards";

    document.getElementById("rbigclock").style.visibility="visible";
    document.getElementById("rpin1").style.visibility="visible";
    document.getElementById("rpin2").style.visibility="visible";
    document.getElementById("rclkdot").style.visibility="visible";

    document.getElementById("rarrow7").style.visibility="visible";
    document.getElementById("rstrtbtn").style.visibility="visible";
    document.getElementById("rstartstep").style.visibility="visible";
    document.getElementById("rclktable").style.visibility="visible";
}
    
function rshowmoveclk()
{
    document.getElementById("rstrtbtn").style.visibility="hidden";
    document.getElementById("rarrow7").style.visibility="hidden";
    setTimeout(function()
    {
       if (size == 500)//numbox == 2.33 && size == 10)
        {
        
        document.getElementById("rpin1").style.animation="rclockpin10 4.20s forwards";
        document.getElementById("rpin2").style.animation="rclockpin210 4.00s forwards";

        /*Countdown Timer Animation Code Start */ 
        function animateValue(id, start, end, duration) {
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() 
                {
                    current += increment;
                    obj.innerHTML = current;
                    if (current == end) 
                    {
                        clearInterval(timer);
                    }
                }, stepTime);
        }

        animateValue("rvalue", 0, 205, 2000);
        /*Countdown Timer Animation Code End*/
        document.getElementById("rpress1").style.visibility="visible";
        document.getElementById("rpress2").style.visibility="visible";

            setTimeout(function()
            {
            document.getElementById("rstopstep").style.visibility="visible";
            document.getElementById("rarrow8").style.visibility="visible";
            document.getElementById("rstopbtn").style.visibility="visible";
            },3000); 
        
        //document.getElementById("stopstep").style.visibility="visible";
        //document.getElementById("arrow8").style.visibility="visible";
        //document.getElementById("stopbtn").style.visibility="visible";
        }
    
        else if (size == 700)//numbox == 5.25 && size == 15)
        {
        
        document.getElementById("rpin1").style.animation="rclockpin15 4.20s forwards";
        document.getElementById("rpin2").style.animation="rclockpin215 4.00s forwards";

        /*Countdown Timer Animation Code Start */ 
        function animateValue(id, start, end, duration) {
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() 
                {
                    current += increment;
                    obj.innerHTML = current;
                    if (current == end) 
                    {
                        clearInterval(timer);
                    }
                }, stepTime);
        }

        animateValue("rvalue", 0, 228, 3000);
        /*Countdown Timer Animation Code End*/
        document.getElementById("rpress1").style.visibility="visible";
        document.getElementById("rpress2").style.visibility="visible";

            setTimeout(function()
            {
            document.getElementById("rstopstep").style.visibility="visible";
            document.getElementById("rarrow8").style.visibility="visible";
            document.getElementById("rstopbtn").style.visibility="visible";
            },3000); 
        
        }
        else
        {
        //document.getElementById("numoutnext").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>233.33 for 10cm speciman<br><br>525.00 for 15cm speciman";
        alert("Wrong");
        } 
        


        document.getElementById("rokcube").style.visibility="hidden";

            setTimeout(function()
            {
            document.getElementById("rcrekl").style.animation="rcrek1 1.20s forwards";
            document.getElementById("rcrekr").style.animation="rcrek2 1.20s forwards";
            document.getElementById("rpress1").style.visibility="hidden";
            document.getElementById("rpress2").style.visibility="hidden";
            },1750);    
    //img.setAttribute('style','transform:rotate(180deg)');
    },1850);

}


function rstopmoveclk()
{
    document.getElementById("rarrow8").style.visibility="hidden";
    document.getElementById("rstopbtn").style.visibility="hidden";
    if (size == 500)//numbox == 2.33 && size == 10)
    {
    document.getElementById("rloadfail").innerHTML = "6.15";
    document.getElementById("rlfstep").style.visibility="visible";
    document.getElementById("rarrow9").style.visibility="visible";
    document.getElementById("nextButton10").style.visibility="visible";
    }
    else if (size == 700)//numbox == 5.25 && size == 15)
    {
    document.getElementById("rloadfail").innerHTML = "15.22";
    document.getElementById("rlfstep").style.visibility="visible";
    document.getElementById("rarrow9").style.visibility="visible";
    document.getElementById("nextButton10").style.visibility="visible";
    }
    else
    {
        alert("Wrong");
    }
    

}

/*scene 10 code end*/


/*scene 12 code start*/
function sshowbigclk()
{

    document.getElementById("sarrow6").style.visibility="hidden";

    //document.getElementById("transnumbox1").style.animation="cubeFromCuringTank 2s forwards";

    document.getElementById("sbigclock").style.visibility="visible";
    document.getElementById("spin1").style.visibility="visible";
    document.getElementById("spin2").style.visibility="visible";
    document.getElementById("sclkdot").style.visibility="visible";

    document.getElementById("sarrow7").style.visibility="visible";
    document.getElementById("sstrtbtn").style.visibility="visible";
    document.getElementById("sstartstep").style.visibility="visible";
    document.getElementById("sclktable").style.visibility="visible";
}
    
function sshowmoveclk()
{
    document.getElementById("sstrtbtn").style.visibility="hidden";
    document.getElementById("sarrow7").style.visibility="hidden";
    setTimeout(function()
    {
       if (size == 500)//numbox == 2.33 && size == 10)
        {
        
        document.getElementById("spin1").style.animation="sclockpin10 4.20s forwards";
        document.getElementById("spin2").style.animation="sclockpin210 4.00s forwards";

        /*Countdown Timer Animation Code Start*/  
        function animateValue(id, start, end, duration) {
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() 
                {
                    current += increment;
                    obj.innerHTML = current;
                    if (current == end) 
                    {
                        clearInterval(timer);
                    }
                }, stepTime);
        }

        animateValue("svalue", 0, 172, 2000);
        /*Countdown Timer Animation Code End*/
        document.getElementById("spress1").style.visibility="visible";
        document.getElementById("spress2").style.visibility="visible";

            setTimeout(function()
            {
            document.getElementById("sstopstep").style.visibility="visible";
            document.getElementById("sarrow8").style.visibility="visible";
            document.getElementById("sstopbtn").style.visibility="visible";
            },3000); 
        
        //document.getElementById("stopstep").style.visibility="visible";
        //document.getElementById("arrow8").style.visibility="visible";
        //document.getElementById("stopbtn").style.visibility="visible";
        }
    
        else if (size == 700)//numbox == 5.25 && size == 15)
        {
        
        document.getElementById("spin1").style.animation="sclockpin15 4.20s forwards";
        document.getElementById("spin2").style.animation="sclockpin215 4.00s forwards";

        /*Countdown Timer Animation Code Start*/  
        function animateValue(id, start, end, duration) {
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() 
                {
                    current += increment;
                    obj.innerHTML = current;
                    if (current == end) 
                    {
                        clearInterval(timer);
                    }
                }, stepTime);
        }

        animateValue("svalue", 0, 203, 3000);
        /*Countdown Timer Animation Code End*/
        document.getElementById("spress1").style.visibility="visible";
        document.getElementById("spress2").style.visibility="visible";

            setTimeout(function()
            {
            document.getElementById("sstopstep").style.visibility="visible";
            document.getElementById("sarrow8").style.visibility="visible";
            document.getElementById("sstopbtn").style.visibility="visible";
            },3000); 
        
        }
        else
        {
        //document.getElementById("numoutnext").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>233.33 for 10cm speciman<br><br>525.00 for 15cm speciman";
        alert("Wrong");
        } 
        


        document.getElementById("sokcube").style.visibility="hidden";

            setTimeout(function()
            {
            document.getElementById("screkl").style.animation="screk1 1.20s forwards";
            document.getElementById("screkr").style.animation="screk2 1.20s forwards";
            document.getElementById("spress1").style.visibility="hidden";
            document.getElementById("spress2").style.visibility="hidden";
            },1750);    
    //img.setAttribute('style','transform:rotate(180deg)');
    },1850);

}


function sstopmoveclk()
{
    document.getElementById("sarrow8").style.visibility="hidden";
    document.getElementById("sstopbtn").style.visibility="hidden";
    if (size == 500)//numbox == 2.33 && size == 10)
    {
    document.getElementById("sloadfail").innerHTML = "5.15";
    document.getElementById("slfstep").style.visibility="visible";
    document.getElementById("sarrow9").style.visibility="visible";
    document.getElementById("nextButton12").style.visibility="visible";
    }
    else if (size == 700)//numbox == 5.25 && size == 15)
    {
    document.getElementById("sloadfail").innerHTML = "13.50";
    document.getElementById("slfstep").style.visibility="visible";
    document.getElementById("sarrow9").style.visibility="visible";
    document.getElementById("nextButton12").style.visibility="visible";
    }
    else
    {
        alert("Wrong");
    }
    

}

/*scene 12 code end*/


function soneIn()

{

    sone = document.getElementById("oneIn").value;

if (sone == "A") 
    {
        //alert("Correct");
        document.getElementById("nextButton7").style.visibility="visible";
        document.getElementById("fi1arrow10").style.visibility="visible";
        document.getElementById("fibox1").innerHTML = "Correctly Identified";
        document.getElementById("fibox1").style.color="green";
        document.getElementById("su1").style.visibility="hidden";
    } 
else if(sone == "B")
    {
document.getElementById("fibox1").innerHTML = "Incorrectly identified";
    }
else if(sone == "C")
    {
document.getElementById("fibox1").innerHTML = "Incorrectly identified";
    }
else 
    {
document.getElementById("fibox1").innerHTML = "Select Type";
    }
    //size = document.getElementById("sizeIn").value;
/*
if (sone !== "")//(oneIn == A or oneIn == B)//(oneIn !== "") && size > 0)
    {
        document.getElementById("nextButton7").style.visibility="visible";
        document.getElementById("fi1arrow10").style.visibility="visible";
        document.getElementById("fibox1").innerHTML = "&nbsp;";
    }
    
    else
    {
        document.getElementById("fibox1").innerHTML = "Select Type"; 
    }
*/
}


function stwoIn()

{

    stwo = document.getElementById("twoIn").value;

    //size = document.getElementById("sizeIn").value;


/**/
if (stwo == "B")//(oneIn == A or oneIn == B)//(oneIn !== "") && size > 0)
    {
        document.getElementById("nextButton7").style.visibility="visible";
        document.getElementById("fi2arrow10").style.visibility="visible";
        // document.getElementById("step8matter1").style.visibility="visible";
        // document.getElementById("step8matter2").style.visibility="visible";
        document.getElementById("step8matter3").style.visibility="visible";
        document.getElementById("step8matter4").style.visibility="visible";
        document.getElementById("fibox2").innerHTML = "Correctly Identified";
        document.getElementById("fibox2").style.color="green";
        document.getElementById("nextButton9").style.visibility="visible";
        document.getElementById("su2").style.visibility="hidden";
    }
else if(stwo == "A")
    {
        document.getElementById("fibox2").innerHTML = "Incorrectly identified";
    }
else if(stwo == "C")
    {
        document.getElementById("fibox2").innerHTML = "Incorrectly identified";
    }   
    else
    {
        document.getElementById("fibox2").innerHTML = "Select Type"; 
    }

}


function sthreeIn()

{

    sthree = document.getElementById("threeIn").value;

    //size = document.getElementById("sizeIn").value;

if (sthree == "C")//(oneIn == A or oneIn == B)//(oneIn !== "") && size > 0)
    {
        document.getElementById("nextButton7").style.visibility="visible";
        //document.getElementById("fi3arrow10").style.visibility="visible";
        document.getElementById("step10matter3").style.visibility="visible";
        document.getElementById("step10matter4").style.visibility="visible";
        document.getElementById("fibox3").innerHTML = "Correctly Identified";
        document.getElementById("fibox3").style.color="green";
        document.getElementById("nextButton11").style.visibility="visible";
        document.getElementById("su3").style.visibility="hidden";
    }
else if(sthree == "A")
    {
        document.getElementById("fibox3").innerHTML = "Incorrectly identified";
    }
else if(sthree == "B")
    {
        document.getElementById("fibox3").innerHTML = "Incorrectly identified";
    }     
else
    {
        document.getElementById("fibox3").innerHTML = "Select Type"; 
    }

}


function sfourIn()

{

    sfour = document.getElementById("fourIn").value;

    //size = document.getElementById("sizeIn").value;

if (sfour == "A")//(oneIn == A or oneIn == B)//(oneIn !== "") && size > 0)
    {
        document.getElementById("nextButton7").style.visibility="visible";
        document.getElementById("fi4arrow10").style.visibility="visible";
        document.getElementById("fibox4").innerHTML = "Correctly Identified";
        document.getElementById("fibox4").style.color="green";
        document.getElementById("nextButton13").style.visibility="visible";
    }
else if(sthree == "B")
    {
        document.getElementById("fibox4").innerHTML = "Incorrectly identified";
    }
else if(sthree == "C")
    {
        document.getElementById("fibox4").innerHTML = "Incorrectly identified";
    }     
   
    else
    {
        document.getElementById("fibox4").innerHTML = "Select Type"; 
    }

}

function ShowLF()
{



    if (size == 500)//numbox == 2.33 && size == 10)
    {
    document.getElementById("ty1").innerHTML = sone;
    document.getElementById("ty2").innerHTML = stwo;
    document.getElementById("ty3").innerHTML = sthree;
    document.getElementById("ty4").innerHTML = sone;

    document.getElementById("lf1").innerHTML = "6.45 kN";
    document.getElementById("lf2").innerHTML = "4.32 kN";
    document.getElementById("lf3").innerHTML = "6.15 kN"; 
    document.getElementById("lf4").innerHTML = "5.15 kN";

// rapt = (6.125*500)/(100*100*100);
 
// rapt2 = (3*4.32*120)/(100*100*100);
  
// rapt3 = (5.15*500)/(100*100*100); 

rapt = 2.45;
 
rapt2 = 1.55;
  
rapt3 = 2.06;

    document.getElementById("csf1").innerHTML = rapt;
    document.getElementById("csf2").innerHTML = rapt2;
    document.getElementById("csf3").innerHTML = "-";
    document.getElementById("csf4").innerHTML = rapt3;
    
    document.getElementById("arrow10").style.visibility="visible";
    document.getElementById("nextButton14").style.visibility="visible";
    //document.getElementById("arrow9").style.visibility="visible";
    //document.getElementById("nextButton6").style.visibility="visible";
    }
    else if (size == 700)//numbox == 5.25 && size == 15)
    {
    document.getElementById("ty1").innerHTML = sone;
    document.getElementById("ty2").innerHTML = stwo;
    document.getElementById("ty3").innerHTML = sthree;
    document.getElementById("ty4").innerHTML = sone;

    document.getElementById("lf1").innerHTML = "14.06 kN";
    document.getElementById("lf2").innerHTML = "12.10 kN";
    document.getElementById("lf3").innerHTML = "15.22 kN"; 
    document.getElementById("lf4").innerHTML = "13.50 kN";
 
// rapt = (14.06*700)/(150*150*150);  
 
// rapt2 = (3*12.10*148)/(150*150*150);

// rapt3=  (13.50*700)/(100*100*100);

rapt = 2.50;
 
rapt2 = 1.66;
  
rapt3 = 2.40;

    document.getElementById("csf1").innerHTML = rapt;
    document.getElementById("csf2").innerHTML = rapt2;
    document.getElementById("csf3").innerHTML = "-";   
    document.getElementById("csf4").innerHTML = rapt3;
        //document.getElementById("loadfail").innerHTML = "727";
    document.getElementById("arrow10").style.visibility="visible";
    document.getElementById("nextButton14").style.visibility="visible";
    //document.getElementById("arrow9").style.visibility="visible";
    //document.getElementById("nextButton6").style.visibility="visible";
    }
    else
    {
        alert("Wrong");
    }
}

function Showres()
{

    document.getElementById("res1").innerHTML = rapt;
    document.getElementById("res2").innerHTML = rapt2;
    document.getElementById("res3").innerHTML = rapt3;

printavg = (rapt + rapt2 + rapt3) / 3;
            var x2= printavg;
            printavgss2 = x2.toFixed(2);
    document.getElementById("resall").innerHTML = printavgss2;
    document.getElementById("arrow12").style.visibility="visible";
    document.getElementById("nextButton15").style.visibility="visible";
}

function Showrep()
{

    //Global Variable Print Date in Cube

//logo = new Date(date1);

var xx = new Date();
 logo = xx.getDate()+'-'+(xx.getMonth()+1)+'-'+xx.getFullYear();

//Month Print
//document.getElementById("demo").innerHTML = logo.getMonth() + 1;
//Date Print
//document.getElementById("demo2").innerHTML = logo.getDate();
//Year Print
//document.getElementById("demo3").innerHTML = logo.getFullYear();

    //var genrep = new Date();
//alert(logo);
if (size == 500)
{
document.getElementById("sos1").innerHTML= 100+"x"+100+"x"+size+" mm";


document.getElementById("cc1").innerHTML= "N/A";
document.getElementById("cg1").innerHTML= "N/A";

document.getElementById("im1").innerHTML= "N/A";
document.getElementById("ad1").innerHTML= z;
document.getElementById("td1").innerHTML = logo;
document.getElementById("ml1").innerHTML= "6.125";
document.getElementById("ft1").innerHTML= sone;
document.getElementById("v1").innerHTML= "-";
document.getElementById("fs1").innerHTML= rapt;
            var x2= printavg;
            printavg2 = x2.toFixed(2);
document.getElementById("av1").innerHTML= printavg2;

document.getElementById("im2").innerHTML= "N/A";
document.getElementById("ad2").innerHTML= z;
document.getElementById("td2").innerHTML = logo;
document.getElementById("ml2").innerHTML= "4.32";
document.getElementById("ft2").innerHTML= stwo;
document.getElementById("v2").innerHTML= "120";
document.getElementById("fs2").innerHTML= rapt2;
// document.getElementById("av2").innerHTML= "N/A";

document.getElementById("im3").innerHTML= "N/A";
document.getElementById("ad3").innerHTML= z;
document.getElementById("td3").innerHTML = logo;
document.getElementById("ml3").innerHTML= "5.15";
document.getElementById("ft3").innerHTML= sone;
document.getElementById("v3").innerHTML= "-";
document.getElementById("fs3").innerHTML= rapt3;
// document.getElementById("av3").innerHTML= "N/A";
//document.getElementById("cubedatehidden").style.visibility="visible";
    /*document.getElementById("res1").innerHTML = "N/A";
    document.getElementById("res2").innerHTML = "N/A";
    document.getElementById("res3").innerHTML = "N/A";
    document.getElementById("resall").innerHTML = "N/A";
    document.getElementById("arrow12").style.visibility="visible";*/
    document.getElementById("nextButton16").style.visibility="visible";
}
else 
{
document.getElementById("sos1").innerHTML= 150+"x"+150+"x"+size+" mm"; 

document.getElementById("cc1").innerHTML= "N/A";
document.getElementById("cg1").innerHTML= "N/A";

document.getElementById("im1").innerHTML= "N/A";
document.getElementById("ad1").innerHTML= z;
document.getElementById("td1").innerHTML = logo;
document.getElementById("ml1").innerHTML= "14.06";
document.getElementById("ft1").innerHTML= sone;
document.getElementById("v1").innerHTML= "-";
document.getElementById("fs1").innerHTML= rapt;
            var x2= printavg;
            printavg2 = x2.toFixed(2);

document.getElementById("av1").innerHTML= printavg2;

document.getElementById("im2").innerHTML= "N/A";
document.getElementById("ad2").innerHTML= z;
document.getElementById("td2").innerHTML = logo;
document.getElementById("ml2").innerHTML= "12.10";
document.getElementById("ft2").innerHTML= stwo;
document.getElementById("v2").innerHTML= "155";
document.getElementById("fs2").innerHTML= rapt2;
// document.getElementById("av2").innerHTML= "N/A";

document.getElementById("im3").innerHTML= "N/A";
document.getElementById("ad3").innerHTML= z;
document.getElementById("td3").innerHTML = logo;
document.getElementById("ml3").innerHTML= "13.50";
document.getElementById("ft3").innerHTML= sone;
document.getElementById("v3").innerHTML= "-";
document.getElementById("fs3").innerHTML= rapt3;
// document.getElementById("av3").innerHTML= "N/A";
//document.getElementById("cubedatehidden").style.visibility="visible";
    /*document.getElementById("res1").innerHTML = "N/A";
    document.getElementById("res2").innerHTML = "N/A";
    document.getElementById("res3").innerHTML = "N/A";
    document.getElementById("resall").innerHTML = "N/A";
    document.getElementById("arrow12").style.visibility="visible";*/
    document.getElementById("nextButton16").style.visibility="visible";   
}
}
/**/
function reset()
{
    location.reload();
}

function ShowLoadRes()
{
    if (size == 10)//numbox == 2.33 && size == 10)
    {
    document.getElementById("csft1").innerHTML = "24.2";
    document.getElementById("csft2").innerHTML = "32.3";
    document.getElementById("csft3").innerHTML = "29.5";
    document.getElementById("avg1").innerHTML = "28.66";
    document.getElementById("csft4").innerHTML = "24.36/32.96";
    document.getElementById("csft5").innerHTML = "Not Ok";
    document.getElementById("csft6").innerHTML = "Ok";
    document.getElementById("csft7").innerHTML = "Ok";
    document.getElementById("csfres1").innerHTML = "Invalid Test";
    document.getElementById("rlfstep").style.visibility="visible"; 
    document.getElementById("nextButton8").style.visibility="visible";   
    /*document.getElementById("csf1").innerHTML = "24.2";
    document.getElementById("csf2").innerHTML = "32.3";
    document.getElementById("csf3").innerHTML = "29.5";
    csft7
avg1

    document.getElementById("arrow10").style.visibility="visible";
    document.getElementById("nextButton7").style.visibility="visible";
    //document.getElementById("arrow9").style.visibility="visible";
    //document.getElementById("nextButton6").style.visibility="visible";*/
    }
    else if (size == 15)//numbox == 5.25 && size == 15)
    {
    document.getElementById("csft1").innerHTML = "32.3";
    document.getElementById("csft2").innerHTML = "29.5";
    document.getElementById("csft3").innerHTML = "24.0";
    document.getElementById("avg1").innerHTML = "28.6";
    document.getElementById("csft4").innerHTML = "24.31/32.89";    
    document.getElementById("csft5").innerHTML = "Ok";
    document.getElementById("csft6").innerHTML = "Ok";
    document.getElementById("csft7").innerHTML = "Not Ok";
    document.getElementById("csfres1").innerHTML = "Invalid Test";
    document.getElementById("rlfstep").style.visibility="visible";
    document.getElementById("nextButton8").style.visibility="visible";
    /*document.getElementById("lf1").innerHTML = "727";
    document.getElementById("lf2").innerHTML = "865";
    document.getElementById("lf3").innerHTML = "540"; 

    document.getElementById("csf1").innerHTML = "32.3";
    document.getElementById("csf2").innerHTML = "29.5";
    document.getElementById("csf3").innerHTML = "24.0";   
    //document.getElementById("loadfail").innerHTML = "727";
    document.getElementById("arrow10").style.visibility="visible";
    document.getElementById("nextButton7").style.visibility="visible";*/
    //document.getElementById("arrow9").style.visibility="visible";
    //document.getElementById("nextButton6").style.visibility="visible";
    }
    else
    {
        alert("Wrong");
    }
}


function ShowLFinalRes()
{
    if (size == 10)//numbox == 2.33 && size == 10)
    {
    document.getElementById("fcsft1").innerHTML = "28.4";
    document.getElementById("fcsft2").innerHTML = "29.9";
    document.getElementById("fcsft3").innerHTML = "31.2";
    document.getElementById("avg2").innerHTML = "29.83";
    document.getElementById("fcsft4").innerHTML = "25.35/34.31";
    document.getElementById("fcsft5").innerHTML = "Ok";
    document.getElementById("fcsft6").innerHTML = "Ok";
    document.getElementById("fcsft7").innerHTML = "Ok";
    document.getElementById("csfres2").innerHTML = "Valid Test";
    document.getElementById("flfstep").style.visibility="visible";
    //document.getElementById("nextButton9").style.visibility="visible";
    /*document.getElementById("csf1").innerHTML = "24.2";
    document.getElementById("csf2").innerHTML = "32.3";
    document.getElementById("csf3").innerHTML = "29.5";
    csft7
avg1

    document.getElementById("arrow10").style.visibility="visible";
    document.getElementById("nextButton7").style.visibility="visible";
    //document.getElementById("arrow9").style.visibility="visible";
    //document.getElementById("nextButton6").style.visibility="visible";*/
    }
    else if (size == 15)//numbox == 5.25 && size == 15)
    {
    document.getElementById("fcsft1").innerHTML = "28.4";
    document.getElementById("fcsft2").innerHTML = "29.9";
    document.getElementById("fcsft3").innerHTML = "31.2";
    document.getElementById("avg2").innerHTML = "29.83";
    document.getElementById("fcsft4").innerHTML = "25.35/34.31";
    document.getElementById("fcsft5").innerHTML = "Ok";
    document.getElementById("fcsft6").innerHTML = "Ok";
    document.getElementById("fcsft7").innerHTML = "Ok";
    document.getElementById("csfres2").innerHTML = "Valid Test";
    document.getElementById("flfstep").style.visibility="visible";
    //document.getElementById("nextButton9").style.visibility="visible";
    /*document.getElementById("lf1").innerHTML = "727";
    document.getElementById("lf2").innerHTML = "865";
    document.getElementById("lf3").innerHTML = "540"; 

    document.getElementById("csf1").innerHTML = "32.3";
    document.getElementById("csf2").innerHTML = "29.5";
    document.getElementById("csf3").innerHTML = "24.0";   
    //document.getElementById("loadfail").innerHTML = "727";
    document.getElementById("arrow10").style.visibility="visible";
    document.getElementById("nextButton7").style.visibility="visible";*/
    //document.getElementById("arrow9").style.visibility="visible";
    //document.getElementById("nextButton6").style.visibility="visible";
    }
    else
    {
        alert("Wrong");
    }
}
/*
function movecube2(){

    //document.getElementById("arrow1").style.visibility="hidden";

setTimeout(function()

    {

    document.getElementById("cubefromctm").src="fitmachine.png";

    },1750);

document.getElementById("cubefromctm").style.animation="cubeFromctm 2s forwards";

}*/
/* Mouse Click Event
Clicking on the specified symbol instance executes a function in which you can add your own custom code.

Instructions:
1. Add your custom code on a new line after the line that says "// Start your custom code" below.
The code will execute when the symbol instance is clicked.

var nstext : String;/



/*
/* 
    
    if (navlist == 10)
    {
        //trace("Correct");
        //showtext = "242";
        viewttext = "24.2";
        //showtext2 = "323";
        viewttext2 = "32.3";
        //showtext3 = "295";
        viewttext3 = "29.5";
        viewttext4 = "28.66";
        viewttext5 = "24.36/32.96";
        viewttext6 = "Not Ok";
        viewttext7 = "Ok";
        viewttext8 = "Ok";
        viewttext9 = "Invalid Test";
        viewttext10 = "Click Next to Repeat Test with New Specimen";
        //viewttext4 = "28.66";
        
        //op = display.text;
        //op = ".";
        //display.text = op;
        trace(viewttext);
        //cube1.text = 'Load Failure: ' + showtext + ' KN';
        vbox1.text = viewttext;
        //cube2.text = 'Load Failure: ' + showtext2 + ' KN';
        vbox2.text =  viewttext2 ;
        ///cube3.text = 'Load Failure: ' + showtext3 + ' KN';
        vbox3.text =  viewttext3 ;
        //vbox4.text =  'Axat' ;
        //vtext.text = 'Not Ok';
        //vtext2.text = 'Ok';
        //vtext3.text = 'Ok';
        vbox4.text = viewttext4 ;
        vbox5.text = viewttext5 ;
        vbox6.text = viewttext6 ;
        vbox7.text = viewttext7 ;
        vbox8.text = viewttext8 ;
        vbox9.text = viewttext9 ;
        vbox10.text = viewttext10 ;
        
    }
    
    //else if (navlist == 15)
    else
    {
        //trace("Correct");
        //showtext = "727";
        viewttext = "32.3";
        //showtext2 = "865";
        viewttext2 = "29.5";
        //showtext3 = "540";
        viewttext3 = "24.0";
        viewttext4 = "28.6";
        viewttext5 = "24.31/32.89";
        viewttext6 = "Ok";
        viewttext7 = "Ok";
        viewttext8 = "Not Ok";
        viewttext9 = "Invalid Test";
        viewttext10 = "Click Next to Repeat Test with New Specimen";
        //viewttext4 = "28.6";
        //op = display.text;
        //op = ".";
        //display.text = op;
        //trace(viewttext);
        //cube1.text = 'Load Failure: ' + showtext + ' KN';
        vbox1.text = viewttext;
        //cube2.text = 'Load Failure: ' + showtext2 + ' KN';
        vbox2.text =  viewttext2 ;
        ///cube3.text = 'Load Failure: ' + showtext3 + ' KN';
        vbox3.text =  viewttext3 ;
        //vbox4.text =  'Naveen' ;
        //vtext.text = 'Not Ok';
        //vtext2.text = 'Ok';
        //vtext3.text = 'Ok';
        vbox4.text = viewttext4 ;
        vbox5.text = viewttext5 ;
        vbox6.text = viewttext6 ;
        vbox7.text = viewttext7 ;
        vbox8.text = viewttext8 ;
        vbox9.text = viewttext9 ;
        vbox10.text = viewttext10 ;
    }
    
    //{
        //trace("Incorrect");
        //itext = "Enter Correct Value:\n\n2.33 KN/s for 10cm speciman\n\n5.25 KN/s for 15cm speciman";
        //printci.text = itext;
        //display.text = (display.text + ".");
    //}
}
---------------------------------------------------------
/* Mouse Click Event
Clicking on the specified symbol instance executes a function in which you can add your own custom code.

Instructions:
1. Add your custom code on a new line after the line that says "// Start your custom code" below.
The code will execute when the symbol instance is clicked.

var nstext : String;*/

//var showtext : String;
/*var showtext2 : String;
var showtext3 : String;
/
var reviewttext : String;
var reviewttext2 : String;
var reviewttext3 : String;
//var axat:Number = 28.66;
//var nav11:Number = 28.6;
var reviewttext4 : String;
var reviewttext5 : String;
var reviewttext6 : String;
var reviewttext7 : String;
var reviewttext8 : String;
var reviewttext9 : String;
var reviewttext10 : String;
//var valtext : String;


//var itext : String;
//var nstext:Number;
//stop();button_obs
reviewbtn.addEventListener(MouseEvent.CLICK, revr_MouseClickHandler);

function revr_MouseClickHandler(event:MouseEvent):void
{
    //nstext = display.text;
    // Start your custom code
    // This example code displays the words "Mouse clicked" in the Output panel.
    //trace("Mouse clicked");
    //trace(nstext);
    //if(nstext == 2.333)
    //{
    // End your custom code
    if (navlist == 10)
    {
        //trace("Correct");
        //showtext = "242";
        reviewttext = "30.4";
        //showtext2 = "323";
        reviewttext2 = "29.6";
        //showtext3 = "295";
        reviewttext3 = "32.2";
        reviewttext4 = "30.73";
        reviewttext5 = "26.12/35.34";
        reviewttext6 = "Ok";
        reviewttext7 = "Ok";
        reviewttext8 = "Ok";
        reviewttext9 = "Valid Test";
        reviewttext10 = "Click Next to Generate Report";
        //viewttext4 = "28.66";
        
        //op = display.text;
        //op = ".";
        //display.text = op;
        //trace(viewttext);
        //cube1.text = 'Load Failure: ' + showtext + ' KN';
        rvbox1.text = reviewttext;
        //cube2.text = 'Load Failure: ' + showtext2 + ' KN';
        rvbox2.text =  reviewttext2 ;
        ///cube3.text = 'Load Failure: ' + showtext3 + ' KN';
        rvbox3.text =  reviewttext3 ;
        //vbox4.text =  'Axat' ;
        //vtext.text = 'Not Ok';
        //vtext2.text = 'Ok';
        //vtext3.text = 'Ok';
        rvbox4.text = reviewttext4 ;
        rvbox5.text = reviewttext5 ;
        rvbox6.text = reviewttext6 ;
        rvbox7.text = reviewttext7 ;
        rvbox8.text = reviewttext8 ;
        rvbox9.text = reviewttext9 ;
        rvbox10.text = reviewttext10 ;
        
    }
    
    //else if (navlist == 15)
    else
    {
        //trace("Correct");
        //showtext = "727";
        reviewttext = "28.4";
        //showtext2 = "865";
        reviewttext2 = "29.9";
        //showtext3 = "540";
        reviewttext3 = "31.2";
        reviewttext4 = "29.83";
        reviewttext5 = "25.35/34.31";
        reviewttext6 = "Ok";
        reviewttext7 = "Ok";
        reviewttext8 = "Ok";
        reviewttext9 = "Valid Test";
        reviewttext10 = "Click Next to Generate Report";
        //viewttext4 = "28.6";
        //op = display.text;
        //op = ".";
        //display.text = op;
        trace(viewttext);
        //cube1.text = 'Load Failure: ' + showtext + ' KN';
        rvbox1.text = reviewttext;
        //cube2.text = 'Load Failure: ' + showtext2 + ' KN';
        rvbox2.text =  reviewttext2 ;
        ///cube3.text = 'Load Failure: ' + showtext3 + ' KN';
        rvbox3.text =  reviewttext3 ;
        //vbox4.text =  'Naveen' ;
        //vtext.text = 'Not Ok';
        //vtext2.text = 'Ok';
        //vtext3.text = 'Ok';
        rvbox4.text = reviewttext4 ;
        rvbox5.text = reviewttext5 ;
        rvbox6.text = reviewttext6 ;
        rvbox7.text = reviewttext7 ;
        rvbox8.text = reviewttext8 ;
        rvbox9.text = reviewttext9 ;
        rvbox10.text = reviewttext10 ;
    }
    //gotoAndPlay(333);
    //{
        //trace("Incorrect");
        //itext = "Enter Correct Value:\n\n2.33 KN/s for 10cm speciman\n\n5.25 KN/s for 15cm speciman";
        //printci.text = itext;
        //display.text = (display.text + ".");
    //}
}
*/
