const myItem1 = document.getElementById("myItem1");
            const itemCount = document.getElementById("cartcount");

            let itemQuantity1 = 1;
            let itemQuantity2 = 1;
            let itemQuantity3 = 1;
            let itemQuantity4 = 1;
            let itemQuantity5 = 1;
            let itemQuantity6 = 1;
            let itemQuantity7 = 1;
            let itemQuantity8 = 1;
            let itemQuantity9 = 1;
            let itemQuantity10 = 1;
            let itemQuantity11 = 1;
            let itemQuantity12 = 1;

            let checkOutPrice = 0;

            countCart = 0;

            document.getElementById("button-add1").onclick = function(){
                countCart++;
                itemCount.textContent = countCart;

                checkOutPrice += 4.00;

                document.getElementById("checkoutCost").textContent = checkOutPrice;
                document.getElementById("quantity1").textContent = itemQuantity1;

                myItem1.classList.toggle("itemShow1");
            }

            const myItem2 = document.getElementById("myItem2");

            document.getElementById("button-add2").onclick = function(){
                countCart++;
                itemCount.textContent = countCart;

                checkOutPrice += 4.75;
                document.getElementById("checkoutCost").textContent = checkOutPrice;
                document.getElementById("quantity2").textContent = itemQuantity2;

                myItem2.classList.toggle("itemShow2");           
            }

            const myItem3 = document.getElementById("myItem3");

            document.getElementById("button-add3").onclick = function(){
                countCart++;
                itemCount.textContent = countCart;

                checkOutPrice += 3.50;
                document.getElementById("checkoutCost").textContent = checkOutPrice;
                document.getElementById("quantity3").textContent = itemQuantity3;

                 myItem3.classList.toggle("itemShow3");           
            }

            const myItem4 = document.getElementById("myItem4");

            document.getElementById("button-add4").onclick = function(){
                countCart++;
                itemCount.textContent = countCart;
                
                checkOutPrice += 2.00;
                document.getElementById("checkoutCost").textContent = checkOutPrice;
                document.getElementById("quantity4").textContent = itemQuantity4;

                myItem4.classList.toggle("itemShow4");           
            }

            const myItem5 = document.getElementById("myItem5");

            document.getElementById("button-add5").onclick = function(){
                countCart++;
                itemCount.textContent = countCart;

                checkOutPrice += 2.50;
                document.getElementById("checkoutCost").textContent = checkOutPrice;
                document.getElementById("quantity5").textContent = itemQuantity5;

                myItem5.classList.toggle("itemShow5");           
            }

            const myItem6 = document.getElementById("myItem6");

            document.getElementById("button-add6").onclick = function(){
                countCart++;
                itemCount.textContent = countCart;
                
                checkOutPrice += 2.75;
                document.getElementById("checkoutCost").textContent = checkOutPrice;
                document.getElementById("quantity6").textContent = itemQuantity6;

                 myItem6.classList.toggle("itemShow6");           
            }

            const myItem7 = document.getElementById("myItem7");

            document.getElementById("button-add7").onclick = function(){
                countCart++;
                itemCount.textContent = countCart;
                
                checkOutPrice += 3.50;
                document.getElementById("checkoutCost").textContent = checkOutPrice;
                document.getElementById("quantity7").textContent = itemQuantity7;

                myItem7.classList.toggle("itemShow7");           
            }

            const myItem8 = document.getElementById("myItem8");

            document.getElementById("button-add8").onclick = function(){
                countCart++;
                itemCount.textContent = countCart;
                
                checkOutPrice += 3.00;
                document.getElementById("checkoutCost").textContent = checkOutPrice;
                document.getElementById("quantity8").textContent = itemQuantity8;

                 myItem8.classList.toggle("itemShow8");           
            }

            const myItem9 = document.getElementById("myItem9");

            document.getElementById("button-add9").onclick = function(){
                countCart++;
                itemCount.textContent = countCart;
                
                checkOutPrice += 2.75;
                document.getElementById("checkoutCost").textContent = checkOutPrice;
                document.getElementById("quantity9").textContent = itemQuantity9;
                
                 myItem9.classList.toggle("itemShow9");           
            }

            const myItem10 = document.getElementById("myItem10");

            document.getElementById("button-add10").onclick = function(){
                countCart++;
                itemCount.textContent = countCart;
                
                checkOutPrice += 2.50;
                document.getElementById("checkoutCost").textContent = checkOutPrice;
                document.getElementById("quantity10").textContent = itemQuantity10;

                myItem10.classList.toggle("itemShow10");
            }

            const myItem11 = document.getElementById("myItem11");

            document.getElementById("button-add11").onclick = function(){
                countCart++;
                itemCount.textContent = countCart;
                
                checkOutPrice += 4.50;
                document.getElementById("checkoutCost").textContent = checkOutPrice;
                document.getElementById("quantity11").textContent = itemQuantity11;

                 myItem11.classList.toggle("itemShow11");           
            }

            const myItem12 = document.getElementById("myItem12");

            document.getElementById("button-add12").onclick = function(){
                countCart++;
                itemCount.textContent = countCart;
                
                checkOutPrice += 4.25;
                document.getElementById("checkoutCost").textContent = checkOutPrice;
                document.getElementById("quantity12").textContent = itemQuantity12;

                 myItem12.classList.toggle("itemShow12");           
            }


            document.getElementById("decrease1").onclick = function() {
                 itemQuantity1--;
                 checkOutPrice -= 4.00;

                if(itemQuantity1 < 1){
                    itemQuantity1 = 1;
                    countCart--;
                    itemCount.textContent = countCart;
                    myItem1.classList.toggle("itemShow1");
                    document.getElementById("checkoutCost").textContent = checkOutPrice;
                }
                else
                {
                    document.getElementById("checkoutCost").textContent = checkOutPrice;
                    document.getElementById("quantity1").textContent = itemQuantity1;
                }
            }

            document.getElementById("increase1").onclick = function() {
                itemQuantity1++;

                checkOutPrice += 4.00;
                document.getElementById("checkoutCost").textContent = checkOutPrice;
                document.getElementById("quantity1").textContent = itemQuantity1;
            }

            document.getElementById("decrease2").onclick = function() {
                 itemQuantity2--;
                 checkOutPrice -= 4.75;

                if(itemQuantity2 < 1){
                    itemQuantity2 = 1;
                    countCart--;
                    itemCount.textContent = countCart;
                    myItem2.classList.toggle("itemShow2");
                    document.getElementById("checkoutCost").textContent = checkOutPrice;
                }
                else
                {
                    document.getElementById("checkoutCost").textContent = checkOutPrice;
                    document.getElementById("quantity2").textContent = itemQuantity2;
                }
            }

            document.getElementById("increase2").onclick = function() {
                itemQuantity2++;

                checkOutPrice += 4.75;
                document.getElementById("checkoutCost").textContent = checkOutPrice;
                document.getElementById("quantity2").textContent = itemQuantity2;
            }

            document.getElementById("decrease3").onclick = function() {
                 itemQuantity3--;
                 checkOutPrice -= 3.50;

                if(itemQuantity3 < 1){
                    itemQuantity3 = 1;
                    countCart--;
                    itemCount.textContent = countCart;
                    myItem3.classList.toggle("itemShow3");
                    document.getElementById("checkoutCost").textContent = checkOutPrice;
                }
                else
                {
                    document.getElementById("checkoutCost").textContent = checkOutPrice;
                    document.getElementById("quantity3").textContent = itemQuantity3;
                }
            }

            document.getElementById("increase3").onclick = function() {
                itemQuantity3++;

                checkOutPrice += 3.50;
                document.getElementById("checkoutCost").textContent = checkOutPrice;
                document.getElementById("quantity3").textContent = itemQuantity3;
            }

            document.getElementById("decrease4").onclick = function() {
                 itemQuantity4--;
                 checkOutPrice -= 2.00;

                if(itemQuantity4 < 1){
                    itemQuantity4 = 1;
                    countCart--;
                    itemCount.textContent = countCart;
                    myItem4.classList.toggle("itemShow4");
                    document.getElementById("checkoutCost").textContent = checkOutPrice;
                }
                else
                {
                    document.getElementById("checkoutCost").textContent = checkOutPrice;
                    document.getElementById("quantity4").textContent = itemQuantity4;
                }
            }

            document.getElementById("increase4").onclick = function() {
                itemQuantity4++;

                checkOutPrice += 2.00;
                document.getElementById("checkoutCost").textContent = checkOutPrice;
                document.getElementById("quantity4").textContent = itemQuantity4;
            }

            document.getElementById("decrease5").onclick = function() {
                 itemQuantity5--;
                 checkOutPrice -= 2.50;

                if(itemQuantity5 < 1){
                    itemQuantity5 = 1;
                    countCart--;
                    itemCount.textContent = countCart;
                    myItem5.classList.toggle("itemShow5");
                    document.getElementById("checkoutCost").textContent = checkOutPrice;
                }
                else
                {
                    document.getElementById("checkoutCost").textContent = checkOutPrice;
                    document.getElementById("quantity5").textContent = itemQuantity5;
                }
            }

            document.getElementById("increase5").onclick = function() {
                itemQuantity5++;

                checkOutPrice += 2.50;
                document.getElementById("checkoutCost").textContent = checkOutPrice;
                document.getElementById("quantity5").textContent = itemQuantity5;
            }

            document.getElementById("decrease6").onclick = function() {
                 itemQuantity6--;
                 checkOutPrice -= 2.75;

                if(itemQuantity6 < 1){
                    itemQuantity6 = 1;
                    countCart--;
                    itemCount.textContent = countCart;
                    myItem6.classList.toggle("itemShow6");
                    document.getElementById("checkoutCost").textContent = checkOutPrice;
                }
                else
                {
                    document.getElementById("checkoutCost").textContent = checkOutPrice;
                    document.getElementById("quantity6").textContent = itemQuantity6;
                }
            }

            document.getElementById("increase6").onclick = function() {
                itemQuantity6++;

                checkOutPrice += 2.75;
                document.getElementById("checkoutCost").textContent = checkOutPrice;
                document.getElementById("quantity6").textContent = itemQuantity6;
            }

            document.getElementById("decrease7").onclick = function() {
                 itemQuantity7--;
                 checkOutPrice -= 3.50;

                if(itemQuantity7 < 1){
                    itemQuantity7 = 1;
                    countCart--;
                    itemCount.textContent = countCart;
                    myItem7.classList.toggle("itemShow7");
                    document.getElementById("checkoutCost").textContent = checkOutPrice;
                }
                else
                {
                    document.getElementById("checkoutCost").textContent = checkOutPrice;
                    document.getElementById("quantity7").textContent = itemQuantity7;
                }
            }

            document.getElementById("increase7").onclick = function() {
                itemQuantity7++;

                checkOutPrice += 3.50;
                document.getElementById("checkoutCost").textContent = checkOutPrice;
                document.getElementById("quantity7").textContent = itemQuantity7;
            }

            document.getElementById("decrease8").onclick = function() {
                 itemQuantity8--;
                 checkOutPrice -= 3.00;

                if(itemQuantity8 < 1){
                    itemQuantity8 = 1;
                    countCart--;
                    itemCount.textContent = countCart;
                    myItem8.classList.toggle("itemShow8");
                    document.getElementById("checkoutCost").textContent = checkOutPrice;
                }
                else
                {
                    document.getElementById("checkoutCost").textContent = checkOutPrice;
                    document.getElementById("quantity8").textContent = itemQuantity8;
                }
            }

            document.getElementById("increase8").onclick = function() {
                itemQuantity8++;

                checkOutPrice += 3.00;
                document.getElementById("checkoutCost").textContent = checkOutPrice;
                document.getElementById("quantity8").textContent = itemQuantity8;
            }

            document.getElementById("decrease9").onclick = function() {
                 itemQuantity9--;
                 checkOutPrice -= 2.75;

                if(itemQuantity9 < 1){
                    itemQuantity9 = 1;
                    countCart--;
                    itemCount.textContent = countCart;
                    myItem9.classList.toggle("itemShow9");
                    document.getElementById("checkoutCost").textContent = checkOutPrice;
                }
                else
                {
                    document.getElementById("checkoutCost").textContent = checkOutPrice;
                    document.getElementById("quantity9").textContent = itemQuantity9;
                }
            }

            document.getElementById("increase9").onclick = function() {
                itemQuantity9++;

                checkOutPrice += 2.75;
                document.getElementById("checkoutCost").textContent = checkOutPrice;
                document.getElementById("quantity9").textContent = itemQuantity9;
            }

            document.getElementById("decrease10").onclick = function() {
                 itemQuantity10--;
                 checkOutPrice -= 2.50;

                if(itemQuantity10 < 1){
                    itemQuantity10 = 1;
                    countCart--;
                    itemCount.textContent = countCart;
                    myItem10.classList.toggle("itemShow10");
                    document.getElementById("checkoutCost").textContent = checkOutPrice;
                }
                else
                {
                    document.getElementById("checkoutCost").textContent = checkOutPrice;
                    document.getElementById("quantity10").textContent = itemQuantity10;
                }
            }

            document.getElementById("increase10").onclick = function() {
                itemQuantity10++;

                checkOutPrice += 2.50;
                document.getElementById("checkoutCost").textContent = checkOutPrice;
                document.getElementById("quantity10").textContent = itemQuantity10;
            }

            document.getElementById("decrease11").onclick = function() {
                itemQuantity11--;
                checkOutPrice -= 4.50;

               if(itemQuantity11 < 1){
                   itemQuantity11 = 1;
                   countCart--;
                   itemCount.textContent = countCart;
                   myItem11.classList.toggle("itemShow11");
                   document.getElementById("checkoutCost").textContent = checkOutPrice;
               }
               else
               {
                   document.getElementById("checkoutCost").textContent = checkOutPrice;
                   document.getElementById("quantity10").textContent = itemQuantity10;
               }
           }

           document.getElementById("increase11").onclick = function() {
               itemQuantity11++;

               checkOutPrice += 4.50;
               document.getElementById("checkoutCost").textContent = checkOutPrice;
               document.getElementById("quantity11").textContent = itemQuantity11;
           }

           document.getElementById("decrease12").onclick = function() {
            itemQuantity12--;
            checkOutPrice -= 4.25;

           if(itemQuantity12 < 1){
               itemQuantity12 = 1;
               countCart--;
               itemCount.textContent = countCart;
               myItem12.classList.toggle("itemShow12");
               document.getElementById("checkoutCost").textContent = checkOutPrice;
           }
           else
           {
               document.getElementById("checkoutCost").textContent = checkOutPrice;
               document.getElementById("quantity12").textContent = itemQuantity12;
           }
       }

       document.getElementById("increase12").onclick = function() {
           itemQuantity12++;

           checkOutPrice += 4.25;
           document.getElementById("checkoutCost").textContent = checkOutPrice;
           document.getElementById("quantity12").textContent = itemQuantity12;
       }
