function addNumbers(){
    var firstnumber = parseFloat(document.getElementById('firstnumber').value);
    var secondnumber = parseFloat(document.getElementById('secondnumber').value);
    document.getElementById('total').value = firstnumber + secondnumber;
  
    if(isNaN(firstnumber || firstnumber ==="")){
        alert('please add number not string')
    }
    if(isNaN(secondnumber || secondnumber ==="" )){
        alert('please add number not string')
    }
}
// function addNumbers(){
//     alert('pelase enter the number'); 
// }