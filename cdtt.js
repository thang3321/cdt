const check = () =>{
    let a = +document.getElementById("amount").value;
    let b = document.getElementById("fromcurrency").value;
    let c = document.getElementById("tocurrency").value;
    let result = document.getElementById("result");
    if(a < 0){
        alert("Số tiền không hợp lệ");
    }
    switch(b){
        case "vietnam":
            switch(c){
                case "usa":
                    result = a * 0.0004;
                alert("Sô tiền sau khi quy đổi là: " + result);
                    break;
                case "vietnam":
                alert("Không hợp lệ");
                break;
            }
            break;
        case "usa":
            switch(c){
                case "vietnam":
                    result = a * 0.0004;
                alert("Sô tiền sau khi quy đổi là: " + result);
                    break;
                case "usa":
                alert("Không hợp lệ");
                break;
            }
        break;
}
}