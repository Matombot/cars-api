const carElem = document.querySelector(".cars")

axios
.get("https://api-tutor.herokuapp.com/v1/cars")
.then(function(result){
    console.log(result.data);

  result.data.forEach(car => {
 const lists = document.createElement('tr') 
   lists.innerHTML =`<tr>
   <td> ${car.make} <td><td> ${car.color} <td> <td > ${car.model} <td>
    <tr>`
   carElem.appendChild(lists);
   carElem.style.color='blue';
});  
});

//<th> make <th><th> color<th><th> model <th>