                  // Total sales calculation


                  function totalSales(shirtQuantity,pantQuantity,shoeQuantity){
                    if (typeof shirtQuantity !="number" || typeof pantQuantity !="number"  || typeof shoeQuantity !="number") {
                        return "Please enter the Quantities in number " ;
                    }
                    const shirtPrice=100;
                    const pantPrice=200;
                    const shoePrice=500;
                    const totalShirtPrice=shirtQuantity*shirtPrice;
                    const totalPantPrice=pantQuantity*pantPrice;
                    const totalShoePrice=shoeQuantity*shoePrice;
                    const total=totalShirtPrice+totalPantPrice+totalShoePrice;
                    return total;
                }
                var shirtQuantity =1;
                var pantQuantity =1;
                var shoeQuantity =1 ;
                var totalAmount=totalSales(shirtQuantity,pantQuantity,shoeQuantity);
                console.log("Total sales amount :",totalAmount);