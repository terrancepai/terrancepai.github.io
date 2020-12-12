"using strict:"

var inventory = [
    {item:"mouse", price:10.0},
    {item:"keyboard", price:25.00},
    {item:"computer", price:100.00},
    {item:"monitor", price:30.0},
    {item:"microphone", price:20.0},
    {item:"mousepad", price:50.0},
];

//declare any global variables
var grandtotal=0;


//display the inventory in a table on the webpage
var tableHTML= "<table>" +
                "<caption>Welcome to Terrance's Electronic Store</caption>" +
                "<tr><th>Item</th><th>Price</th></tr>";
for(var i = 0; i < inventory.length; i++) {
tableHTML += "<tr><td>" + inventory [i].item +
             "</td><td>$" + inventory [i].price 
             "</td></tr>";
    
   
}
    
tableHTML += "</table>";
document.getElementById("table").innerHTML = tableHTML;


function addItem()
{
   //function to add items to order
    var itemname = document.getElementById("item").value;
    var quantity = document.getElementById("qty").value;
    var itemprice = findPrice(itemname);
    if (itemprice==-1) {
        window.alert ("item not found");
    }
    else{
        var itemtotal= itemprice * quantity;
        grandtotal=grandtotal+itemtotal;
        document.getElementById("total").innerHTML="Invoice Total $" + grandtotal;
        document.getElementById("item").value="";
        document.getElementById("qty").value="";

        var receipt = document.getElementById("receipt").value;
        document.getElementById("receipt").value=receipt + quantity+" "+ itemname + " at " + itemprice + " each = " + itemtotal + "\n";
    }

}

function newOrder()
{
    grandtotal=0;
    document.getElementById("total").innerHTML="Invoice Total $" + grandtotal;
    document.getElementById("receipt").value="";
}

//this function searches for a product and returns the price
//or -1 if the product is not found
//DO NOT CHANGE THIS CODE
function findPrice(useritem)
{
    //search the inventory, return price or -1
    for (var i = 0; i < inventory.length; i++)
    {
        if (inventory[i].item == useritem)
            return inventory[i].price;
    }
    //not found, return -1
    return -1;
}
