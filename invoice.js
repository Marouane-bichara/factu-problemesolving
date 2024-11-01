document.addEventListener('DOMContentLoaded', function() {

    // add initital total calculation first 
        //here
    
    // these are selection helpers
    const invoiceTable = document.getElementById('invoiceTable').getElementsByTagName('tbody')[0];
    const invoiceTotal = document.getElementById('invoiceTotal');



    // This function updates the total amount in each row ( item price * Qte )
    function updateItemTotal(row) {
       
    }


    // This function updates the total amount of the invoice (sum all Item totals)
    function updateInvoiceTotal() {
       
    }


    // Ajouter un nouveau item 
    function addNewItem() {
        

    }


    // If you finish the above functions, consider adding a delete button
 
});




// function multi()
// {
//     setInterval(()=> 
//     {
//         if(quantity != 1)
//         {
//             itemTotal.innerHTML = quantity*unitPrice
//         }
//     },
//     500
//     )
// }


let quantity = document.querySelector('.quantity')
let quantityall = document.querySelectorAll('.quantity')
let unitPrice = document.querySelector('.unitPrice');
let unitPriceall = document.querySelectorAll('.unitPrice');
let itemTotal = document.querySelector('.itemTotal');
let itemTotalall = document.querySelectorAll('.itemTotal');
let invoiceTotal = document.getElementById("invoiceTotal");

// let sum = 62;
// console.log(quantityall);

quantityall.forEach((e)=>
{
    // console.log(e);
    
    e.addEventListener('keyup', ()=>
    {
        if(e == 0)
            {
                itemTotal.innerHTML = 0
            }
            let totalitem = e.value * unitPrice.value;
            itemTotal.innerHTML = `${totalitem}.00`
    }
    )


}
);
// function multi()
// {
//     quantity.addEventListener('keyup',()=>
//     {
       
//         // itemTotalall.forEach(element => {
//         //     sum += element.value
//         //     invoiceTotal.innerHTML = sum
//         // });
//         // let allll = totalitem + !toString(invoiceTotal.value);


        
//     itemTotalall.forEach((e)=>
//     {
//         sum += Number(e.textContent) 
//     }
//     )
        
//         console.log(sum);
        
   
//         // itemTotalall.forEach(element => {
//         //     sum += parseFloat(element.textcontent);
//         // });

//         // console.log(sum);
        

        
//     }
//     )
    
// }
// multi()