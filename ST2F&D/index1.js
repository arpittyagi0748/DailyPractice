function fnClick(){
    console.log("hdsadhaf");
    let val=document.getElementById("a").value;
    if(val=="" || val == null || val ==" " ){
        alert("Enter a number");
    }
    else{
        val=Number(val);
        let count=val.toString().length;
        if(!isNaN(val) && count ==5){
            var digits = val.toString().split('');
            var realdigits = digits.map(Number);
            let sum =0;
            for(let i=0;i<realdigits.length;i++){
                sum+=realdigits[i];
            }
            document.getElementById("square").style.width=sum +"px";
            document.getElementById("square").style.height=sum +"px";
            document.getElementById("square").style.backgroundColor= "blue";
            document.getElementById("square").style.borderRadius= sum/5 + "px";
        }
        else{
            alert("Enter a number of digits=5");  
        }
    }
}