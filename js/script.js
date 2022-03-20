var price , crust_price, topping_price ;
let total = 0;
function Getpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
$(document).ready(function(){
    $("button.Order Now").click(function(){
        $("button.ordernow").hide();
    })
});
$("button.Order Now").click(function(event){
    let pname = $(".name option:selected").val()
    let psize = $(".size option:selected").val()
    let pcrust = $(".crust option:selected").val()
    let ptopping = $(".topping option:selected").val()
}
switch (psize){
    case "0":
        price = 0;
        break;
        case "large":
            price = 1200;
            console.log(price);
            break;
            case "medium":
                price = 1000;
                console.log(price);
                break;
                case "small":
                price = 500;
                console.log(price);
                default:
                console.log("error");

}
switch (pcrust){
    case "0":
    crust_price = 0;
    break;
    case "crispy":
        crust_price = 150;
        break;
        case "Glutten free":
            crust_price = 250;
            break;
        case "Stuffed":
            crust_price = 350;
            break;
            default:
                console.log("no price");


}
if ((psize == "0" )&&(pcrust == "0")) {
    console.log("  nothing  selected");
    $("button.Order Now").show();
    alert("please select size");
    

    
}
else {
    $("button.Order Now").hide();

}
total = price + crust_price + topping_price;
console.log("total");

$("#pizzaname").html($)(".name option:selected").val();
$("#pizzasize").html($)(".name option:selected").val();
$("#pizzacrust").html($)(".name option:selected").val();
$("#pizzatopping").html($)(".name option:selected").val();
$("#totals").html(total);

var newOrder = new Getpizza(pname, psize, pcrust,ptopping,total);
$("#ordersmade").append(' id="pizzaname">'+newOrder.name +' id="pizzasize">' + newOrder.size + ' id="pizzacrust">'+newOrder.crust + ' id="pizzatopping">'+newOrder.topping+' id="totals">'+newOrder.total+'');
      console.log(newOrder);