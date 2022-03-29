const carElem = document.querySelector(".cars")

axios
.get("http://api-tutor.herokuapp.com/v1/cars")
.then(function(result){
    console.log(result.data);

  result.data.forEach(car => {
 const lists = document.createElement('li') 
   lists.innerHTML =`<table <tr style = 'margin : 2px '>
   <td style = 'margin : 7px '> ${car.make} <td>
   <td style = 'margin : 2px '> ${car.color} <td>
   <td style = 'margin : 2px '> ${car.model} <td>
   </tr> </table`
   carElem.appendChild(lists);
});  
});

