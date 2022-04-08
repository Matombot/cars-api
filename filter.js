
const colorElem = document.querySelector(".color");
const brandElem = document.querySelector(".brand")
const filterBtn = document.querySelector(".filterBtn");
const cars = document.querySelector(".cars");
const hbsElem = document.querySelector(".hbsTemplate").innerHTML;
const carElem = Handlebars.compile(hbsElem);

filterBtn.addEventListener("click", function () {
    let colors = document.getElementById("color").value;
    let brands = document.getElementById("brand").value;
    if (colors && brands) {

        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/make/${brands}/color/${colors}`)
            .then(function (result) {
                cars.innerHTML = carElem({
                    car: result.data
                });

            })
    }
    else if (colors) {
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/color/${colors}`)
            .then(function (result) {
                cars.innerHTML = carElem({
                    car: result.data
                });

            })
    }else  if (brands) {
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/make/${brands}`)
            .then(function (result) {
                cars.innerHTML = carElem({
                    car: result.data
                });

            })
    }
    else{
        axios
        .get(`https://api-tutor.herokuapp.com/v1/cars`)
        .then(function (result) {
            cars.innerHTML =carElem({
                car: result.data
            });

        })
    }

})
