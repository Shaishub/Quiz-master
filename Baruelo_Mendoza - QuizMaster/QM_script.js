
                function getResult1(){
                    var q1 = document.getElementsByName('q1');
                    let ans = "";
                    var i;
                    for(i=0; i<q1.length; i++){
                        if(q1[i].checked){
                            ans = ans + q1[i].value + "";
							if (document.getElementById('correct1').checked){
								result1.style.color = "green";
							}
							else{
								result1.style.color = "red";
							}
							document.getElementById('result1').innerHTML=q1[i].value = "Q1. "+ ans;	
                        }
                    }
                }
                function getResult2(){
                    var q2 = document.getElementsByName('q2');
                    let ans = "";
                    var i;
                    for(i=0; i<q2.length; i++){
                        if(q2[i].checked){
                            ans = ans + q2[i].value + "";
							if (document.getElementById('correct2').checked){
								result2.style.color = "green";
							}
							else{
								result2.style.color = "red";
							}
                            document.getElementById('result2').innerHTML=q2[i].value = "Q2. "+ ans;
                        }
                    }
                }
                function getResult3(){
                    var q3 = document.getElementsByName('q3');
                    let ans = "";
                    var i;
                    for(i=0; i<q3.length; i++){
                        if(q3[i].checked){
                            ans = ans + q3[i].value + "";
							if (document.getElementById('correct3').checked){
								result3.style.color = "green";
							}
							else{
								result3.style.color = "red";
							}
                            document.getElementById('result3').innerHTML=q3[i].value = "Q3. "+ ans;
                        }
                    }
                }
                function getResult4(){
                    var q4 = document.getElementsByName('q4');
                    let ans = "";
                    var i;
                    for(i=0; i<q4.length; i++){
                        if(q4[i].checked){
                            ans = ans + q4[i].value + "";
							if (document.getElementById('correct4').checked){
								result4.style.color = "green";
							}
							else{
								result4.style.color = "red";
							}
                            document.getElementById('result4').innerHTML=q4[i].value = "Q4. "+ ans;
                        }
                    }
                }
                function getResult5(){
                    var q5 = document.getElementsByName('q5');
                    let ans = "";
                    var i;
                    for(i=0; i<q5.length; i++){
                        if(q5[i].checked){
                            ans = ans + q5[i].value + "";
							if (document.getElementById('correct5').checked){
								result5.style.color = "green";
							}
							else{
								result5.style.color = "red";
							}
                            document.getElementById('result5').innerHTML=q5[i].value = "Q5. "+ ans;
                        }
                    }
                }
                function getResult6(){
                    var q6 = document.getElementsByName('q6');
                    let ans = "";
                    var i;
                    for(i=0; i<q6.length; i++){
                        if(q6[i].checked){
                            ans = ans + q6[i].value + "";
							if (document.getElementById('correct6').checked){
								result6.style.color = "green";
							}
							else{
								result6.style.color = "red";
							}
                            document.getElementById('result6').innerHTML=q6[i].value = "Q6. "+ ans;
                        }
                    }
                }

                function getResult7(){
                    var q7 = document.getElementsByName('q7');
                    let ans = "";
                    var i;
                    for(i=0; i<q7.length; i++){
                        if(q7[i].checked){
                            ans = ans + q7[i].value + "";
							if (document.getElementById('correct7').checked){
								result7.style.color = "green";
							}
							else{
								result7.style.color = "red";
							}
                            document.getElementById('result7').innerHTML=q7[i].value = "Q7. "+ ans;
                        }
                    }
                }
                function getResult8(){
                    var q8 = document.getElementsByName('q8');
                    let ans = "";
                    var i;
                    for(i=0; i<q8.length; i++){
                        if(q8[i].checked){
                            ans = ans + q8[i].value + "";
							if (document.getElementById('correct8').checked){
								result8.style.color = "green";
							}
							else{
								result8.style.color = "red";
							}
                            document.getElementById('result8').innerHTML=q8[i].value = "Q8. "+ ans;
                        }
                    }
                }

                function getResult9(){
                    var q9 = document.getElementsByName('q9');
                    let ans = "";
                    var i;
                    for(i=0; i<q9.length; i++){
                        if(q9[i].checked){
                            ans = ans + q9[i].value + "";
							if (document.getElementById('correct9').checked){
								result9.style.color = "green";
							}
							else{
								result9.style.color = "red";
							}
                            document.getElementById('result9').innerHTML=q9[i].value = "Q9. "+ ans;
                        }
                    }
                }

                function getResult10(){
                    var q10 = document.getElementsByName('q10');
                    let ans10 = "";
                    var i;
                    for(i=0; i<q10.length; i++){
                        if(q10[i].checked){
                            ans10 = ans10 + q10[i].value + "";
							if (document.getElementById('correct10').checked){
								result10.style.color = "green";
							}
							else{
								result10.style.color = "red";
							}
                            document.getElementById('result10').innerHTML=q10[i].value = "Q10. "+ ans10;
                        }
                    }  
                    
                }
               

                function scores() {
                    var score=0

                    if(document.getElementById('correct1').checked) {
                        score++;
                    }
                    if(document.getElementById('correct2').checked) {
                        score++;
                    }
                    if(document.getElementById('correct3').checked) {
                        score++;
                    }
                    if(document.getElementById('correct4').checked) {
                        score++;
                    }
                    if(document.getElementById('correct5').checked) {
                        score++;
                    }
                    if(document.getElementById('correct6').checked) {
                        score++;
                    }
                    if(document.getElementById('correct7').checked) {
                        score++;
                    }
                    if(document.getElementById('correct8').checked) {
                        score++;
                    }
                    if(document.getElementById('correct9').checked) {
                        score++;
                    }
                    if(document.getElementById('correct10').checked) {
                        score++;
                    }
                    document.getElementById("final_score").value = score;
                    }
