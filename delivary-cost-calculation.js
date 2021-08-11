                        // Delivary Cost Calculation

                        
                        function deliveryCost(amount){
                            if( typeof amount !="number"){
                                return "please enter a number"
                            }
                            else if (amount<=100){
                                const cost=amount*100;
                                return cost;
                            }
                            else if (amount<=200){
                                const remainingAmount=amount-100;
                                const cost=(100*100)+(remainingAmount*80);
                                return cost;
                            }
                            else if (amount>200){
                                const remainingAmount=amount-200;
                                const cost=(100*100)+(100*80)+(remainingAmount*50);
                                return cost;
                            }
                        }
                       
                        var amount=280;
                        var totalDelivaryCost=deliveryCost(amount);
                        console.log("Total delivary cost is :",totalDelivaryCost);