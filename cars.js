const color = document.querySelector('.colors');
const car = document.querySelector('.cars');
const brand = document.querySelector('.brands');

const colorTemplates = document.querySelector('.colorTemplate').innerText;
const brandTemplates = document.querySelector('.brandTemplate').innerText;
const carsTemplates = document.querySelector('.carsTemplate').innerText;

const Template1 = Handlebars.compile(colorTemplates);
const Template2 = Handlebars.compile(brandTemplates);
const Template3 = Handlebars.compile(carsTemplates);


//colors
axios.get('https://api-tutor.herokuapp.com/v1/colors').then(function(result) {
    color.innerHTML = Template1({ colors: result.data })

});
//brand
axios.get('https://api-tutor.herokuapp.com/v1/makes').then(function(result) {
    brand.innerHTML = Template2({ brands: result.data });
});
//cars
axios.get('https://api-tutor.herokuapp.com/v1/cars').then(function(result) {
    car.innerHTML = Template3({ cars: result.data });

})