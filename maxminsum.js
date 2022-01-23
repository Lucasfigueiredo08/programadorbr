

function miniMaxSum(arr) {
    var n = arr.length;
    var min = 0;
    var max = 0;
    var soma = 0;
    var result = 0;
    
    
    for (var i = 0; i < n; i++){
        soma = soma + arr[i];
        // console.log(soma);
        min = soma;
    }
    
    for (var j = 0; j < n; j++){
        result = soma - arr[j];
        if (result > max){
            Math.abs(max = result);
            console.log("max " + result);
        }
        //  else {
            if( result < min){
                Math.abs(min = result);
                console.log("min " + result);            
            }
        // }
    }
    console.log(min + " " + max);
}

arr = [769082435, 210437958, 673982045, 375809214, 380564127];
arr1 = [1,2,3,4,5];
arr2 = [5,1,4,2,3];

miniMaxSum(arr2);
