        function dongho(){
			var today = new Date();
			var gio = today.getHours();
			var phut = today.getMinutes();
			var giay = today.getSeconds();

			if(gio<10){
				gio = "0" + gio;
			}
			if(phut<10){
				phut = "0" + phut;
			}
			if(giay<10){
				giay = "0" + giay;
			}
			document.getElementById("time").innerHTML = gio + ":" + phut + ":" + giay;
			setTimeout("dongho()",1000);
		}
		dongho();
       function add(){
        var uName = document.getElementById("text").value;
        var uStatus = document.getElementsByClassName("dropdown-menu").innerText;
        var uTime = document.getElementById("time").innerText;
        var person = {
            name: uName,
            status: uStatus,
            time: uTime
        };
        createTr(person)
       }
        function createTr(person){
            var trElement = document.createElement("tr");
            var tdElement1 = document.createElement("td");
            tdElement1.innerHTML= person.uName;
            var tdElement2 = document.createElement("td");
            tdElement2.innerHTML= person.uStatus;
            var tdElement3 = document.createElement("td");
            tdElement2.innerHTML= person.uTime;
            trElement.appendChild(tdElement1);
            trElement.appendChild(tdElement2);
            trElement.appendChild(tdElement3);
            var tdBody = document.getElementById("body-table")
            tdBody.appendChild(trElement);
        };