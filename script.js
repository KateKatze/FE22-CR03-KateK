// (10 points) Use the band prices on your website to create nine (9) variables that will hold each band prices. You will use these variables as arguments passed to the function calculateInvoice() . Print the result on the console. Note: You should do it manually since we didn't learn how to take values from html elements yet. 

var firstConc = 10;
var secondConc = 20;
var thirdConc = 30;
var fourthConc = 40;
var fifthConc = 50;
var sixthConc = 60;
var seventhConc = 70;
var eightConc = 80;
var ninthConc = 90;

// (20 points) Create the function calculateInvoice() in Javascript that returns the invoice for one customer (returns how much they have spent). The parameters of the function should be one band from stage1, one band from stage2, and another band from stage3. The function will return the sum of these three parameters. 

function calculateInvoice (stage1, stage2, stage3) {
    invoice = stage1 + stage2 + stage3;
    return invoice;
}

console.log(calculateInvoice(firstConc, fourthConc, seventhConc));

// (10 points) Calculate at least 3 invoices using combinations of different events from your website and print them on the console (using one event of each stage).

console.log(calculateInvoice(firstConc, fifthConc, ninthConc));
console.log(calculateInvoice(thirdConc, fourthConc, seventhConc));
console.log(calculateInvoice(secondConc, sixthConc, eightConc));

// (10 points) Create a function studentInvoice() that will apply a 10% discount to the final invoice. This function should have the same parameters as the function calculateInvoice(). Print 3 examples of studentInvoice() on the console. 

function studentInvoice (stage1, stage2, stage3) {
    invoice = stage1 + stage2 + stage3;
    discount = invoice-invoice*0.1;
    return discount;
}

console.log(studentInvoice(firstConc, fifthConc, ninthConc));
console.log(studentInvoice(thirdConc, fourthConc, seventhConc));
console.log(studentInvoice(secondConc, sixthConc, eightConc));