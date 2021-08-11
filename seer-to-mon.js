                   // seer to Mon conversion 


                   function seerToMon(seer){
                    const mon=seer/40;
                    if (typeof seer!= "number"){
                        return "plaease use a Number";
                    }
                        return mon;
                }
                var seer=400;
                var result=seerToMon(seer);
                console.log( "Seer to Mon is :",result);
                