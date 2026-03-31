var a = "Hampanna";
function outer(){
    var b = "Gouda";
    function inner(){
        console.log(a+b);
    }
    inner();
}
outer();