const cars = document.querySelector(".cars")
const brands = document.querySelector(".brands")
const colors = document.querySelector(".colors")
const hbsElem = document.querySelector(".hbsTemplate").innerHTML;
const carElem = Handlebars.compile(hbsElem);
const showElem = document.querySelector(".showTemplate").innerHTML;
const showsElem = Handlebars.compile(showElem);
const shawsElem = document.querySelector(".showsTemplate").innerHTML;
const showssElem = Handlebars.compile(shawsElem);
/*axios
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
*/
//<th> make <th><th> color<th><th> model <th>
axios
        .get(`https://api-tutor.herokuapp.com/v1/makes`)
        .then(function (result)
        
         {
            brands.innerHTML =showsElem({
                showbrand: result.data
            });
console.log(result.data);
        })

    axios
        .get(`https://api-tutor.herokuapp.com/v1/colors`)
        .then(function (result) {
            colors.innerHTML =showssElem({
                showcolor: result.data
            });
console.log(result.data)
        });
    axios
        .get(`https://api-tutor.herokuapp.com/v1/cars`)
        .then(function (result) {
            cars.innerHTML =carElem({
                car: result.data
            });

        })