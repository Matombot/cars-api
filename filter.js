const carElem = document.querySelector(".cars")
const filterBtn = document.querySelector(".filterBtn")

filterBtn.addEventListener('click',function(){
 axios
.get("http://api-tutor.herokuapp.com/v1/cars")
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
})