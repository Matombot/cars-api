const carElem = document.querySelector(".cars")

axios
.get("http://api-tutor.herokuapp.com/v1/cars")
.then(function(result){
    console.log(result.data);

  result.data.forEach(car => {
 const lists = document.createElement('ul') 
   lists.innerHTML =`<table >
   <th> make <th><th> color<th><th> model <th>
   <tr >
   
   <td> ${car.make} <td><td> ${car.color} <td> <td > ${car.model} <td>
   </tr> 
   </table>`
   carElem.appendChild(lists);
   carElem.style.color='blue';
});  
});

